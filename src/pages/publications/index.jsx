import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import React, { useState } from 'react';
import Select from 'react-select';
import { Range } from 'rc-slider';

import Constraint from '../../components/constraint';
import {
  extractPublicationsAuthors,
  extractPublicationsTags,
  extractPublicationYearExtremes,
  filterPublications
} from '../../lib/publication';
import UrlSideEffects from './url-side-effects';
import { getFilterFromUrl } from '../../lib/url';
import PublicationsList from '../../components/publication-list';
import withLayout from '../../components/with-layout';

import 'rc-slider/assets/index.css';

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
        <h2>Filter</h2>

        <h3>Author</h3>
        <Select
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
        />

        <h3>Keywords</h3>
        <Select
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

        <h3>Year of publication</h3>
        <Range
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
          marks={generateRangeMarks(minPublicationYear, maxPublicationYear)}
        />

        <br />
        <br />

        <button
          type="button"
          onClick={() => {
            setFilter(state => ({
              ...state,
              authors: [],
              tags: [],
              range: null
            }));
          }}
        >
          Reset filter
        </button>
      </Constraint>

      <h1>Publications ({filteredPublications.length})</h1>

      {filteredPublications && (
        <PublicationsList
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
        slug
        title
        featuredImage: featured_media {
          localFile {
            childImageSharp {
              fluid(maxWidth: 400) {
                src
                srcSet
                srcSetWebp
              }
            }
          }
        }
        tags {
          slug
          name
        }
        acf {
          year
          author {
            name
          }
        }
      }
    }
  }
`;
