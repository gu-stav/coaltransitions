import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import React, { useState } from 'react';

import Button from '../../components/button';
import Constraint from '../../components/constraint';
import {
  extractPublicationsAuthors,
  extractPublicationsTags,
  extractPublicationYearExtremes,
  filterPublications
} from '../../lib/publication';
import Filter from '../../components/filter';
import UrlSideEffects from './url-side-effects';
import { getFilterFromUrl } from '../../lib/url';
import PublicationsList from '../../components/publication-list';
import Select from '../../components/select';
import Slider from '../../components/slider';
import withLayout from '../../components/with-layout';

const generateRangeMarks = (min, max) => {
  const marks = {};

  // eslint-disable-next-line no-plusplus
  for (let i = min; i <= max; ++i) {
    marks[i] = i;
  }

  return marks;
};

// Read initial state from the URL
const INITIAL_STATE = {
  authors: getFilterFromUrl('authors') || [],
  tags: getFilterFromUrl('keywords') || [],
  range: getFilterFromUrl('range', year => parseInt(year, 10)) || null
};

const Page = ({
  data: {
    publications: { nodes: publications }
  }
}) => {
  const tags = extractPublicationsTags(publications);
  const [
    minPublicationYear,
    maxPublicationYear
  ] = extractPublicationYearExtremes(publications);

  // eslint-disable-next-line no-unused-vars
  const [filter, setFilter] = useState({
    ...INITIAL_STATE
  });

  const filteredPublications = filterPublications(publications, {
    authors: filter.authors,
    tags: filter.tags,
    range: filter.range
  });

  return (
    <>
      <Helmet title="Publications" />

      {typeof window !== 'undefined' && (
        <UrlSideEffects
          state={filter}
          maxPublicationYear={maxPublicationYear}
          minPublicationYear={minPublicationYear}
        />
      )}

      <Constraint>
        <Filter
          rows={[
            [
              <Select
                placeholder="Authors"
                name="author"
                options={extractPublicationsAuthors(publications)}
                value={filter.authors.map(author => ({
                  value: author,
                  label: author
                }))}
                onChange={selected => {
                  const authors = selected.map(({ value }) => value);

                  setFilter(state => ({
                    ...state,
                    authors
                  }));
                }}
                isMulti
                isSearchable
              />,

              <Select
                placeholder="Keywords"
                name="tags"
                options={tags}
                value={filter.tags.map(tag => ({
                  value: tag,
                  label: tags.find(({ value }) => value === tag).label
                }))}
                onChange={selected => {
                  const selectedTags = selected.map(({ value }) => value);

                  setFilter(state => ({
                    ...state,
                    tags: selectedTags
                  }));
                }}
                isMulti
                isSearchable
              />
            ],

            [
              <Slider
                min={minPublicationYear}
                max={maxPublicationYear}
                value={filter.range || [minPublicationYear, maxPublicationYear]}
                onChange={value => {
                  setFilter(state => ({
                    ...state,
                    range: value
                  }));
                }}
                allowCross={false}
                dots
                marks={generateRangeMarks(
                  minPublicationYear,
                  maxPublicationYear
                )}
              />,

              <Button
                type="button"
                onClick={event => {
                  event.preventDefault();
                  setFilter(state => ({
                    ...state,
                    authors: [],
                    tags: [],
                    range: null
                  }));
                }}
              >
                Reset
              </Button>
            ]
          ]}
        />
      </Constraint>

      {filteredPublications && (
        <PublicationsList
          title={`Publications (${filteredPublications.length})`}
          publications={filteredPublications}
          onFilter={filterItem => {
            setFilter(state => ({
              ...state,
              ...filterItem
            }));
          }}
        />
      )}
    </>
  );
};

export default withLayout(Page);

export const query = graphql`
  query {
    publications: allWordpressWpPublications {
      nodes {
        ...publicationListItem
      }
    }
  }
`;
