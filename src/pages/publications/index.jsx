import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import React, { useState, useEffect } from 'react';

import Button from '../../components/button';
import Constraint from '../../components/constraint';
import {
  extractPublicationsAuthors,
  extractPublicationsTags,
  extractPublicationYearExtremes,
  filterPublications
} from '../../lib/publication';
import Filter from '../../components/filter';
import PublicationsList from '../../components/publication-list';
import Select from '../../components/select';
import { getFilterFromUrl, setUrlForFilter } from '../../lib/url';
import Slider from '../../components/slider';
import withLayout from '../../components/with-layout';

const generateRangeMarks = (min, max) => {
  const marks = {};

  // eslint-disable-next-line no-plusplus
  for (let i = min; i <= max; ++i) {
    let year = i;

    if ((max - i) % 2 === 1) {
      if (year !== min && year !== max) {
        year = null;
      }
    }

    if (year) {
      marks[i] = year;
    }
  }

  return marks;
};

const Page = ({
  data: {
    publications: { nodes: initialPublications }
  }
}) => {
  const tags = extractPublicationsTags(initialPublications);
  const [
    minPublicationYear,
    maxPublicationYear
  ] = extractPublicationYearExtremes(initialPublications);
  const authors = extractPublicationsAuthors(initialPublications);

  // eslint-disable-next-line no-unused-vars
  const [filter, setFilter] = useState({
    authors: [],
    tags: [],
    range: null
  });

  const [count, setCount] = useState(0);

  const [publications, setPublications] = useState(initialPublications);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (count === 0) {
        setFilter({
          authors: getFilterFromUrl('authors') || [],
          tags: getFilterFromUrl('keywords') || [],
          range: getFilterFromUrl('range', year => parseInt(year, 10)) || null
        });
      }

      setPublications(
        filterPublications(initialPublications, {
          authors: filter.authors,
          tags: filter.tags,
          range: filter.range
        })
      );

      if (count > 0) {
        setUrlForFilter('authors', filter.authors);
        setUrlForFilter('keywords', filter.tags);

        // Only set the URL parameter, if the start and beginning are different
        // than the default
        if (filter.range !== null) {
          if (
            filter.range[0] !== minPublicationYear ||
            filter.range[1] !== maxPublicationYear
          ) {
            setUrlForFilter('range', filter.range);
          }
        } else {
          setUrlForFilter('range', null);
        }
      }
    }

    setCount(count + 1);
  }, [filter]);

  return (
    <>
      <Helmet title="Publications" />

      <Constraint>
        <Filter
          rows={[
            [
              <Select
                placeholder="Authors"
                name="author"
                options={authors}
                value={filter.authors.map(author => ({
                  value: author,
                  label: author
                }))}
                onChange={selected => {
                  const updatedAuthors = selected.map(({ value }) => value);

                  setFilter(state => ({
                    ...state,
                    authors: updatedAuthors
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

        {publications && (
          <PublicationsList
            title={`Publications (${publications.length})`}
            publications={publications}
            onFilter={filterItem => {
              setFilter(state => ({
                ...state,
                ...filterItem
              }));
            }}
          />
        )}
      </Constraint>
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
