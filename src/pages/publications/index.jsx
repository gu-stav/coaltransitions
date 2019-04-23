import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import React, { useState } from 'react';
import Select from 'react-select';
import { Range } from 'rc-slider';

import Constraint from '../../components/constraint';
import {
  publicationContainsAllTags,
  publicationContainsAllAuthors,
  extractPublicationsAuthors,
  extractPublicationsTags,
  extractPublicationYearExtremes
} from '../../lib/publication';
import PublicationsList from './publication-list';
import withLayout from '../../components/with-layout';

import 'rc-slider/assets/index.css';

const setUrlForFilter = (name, value) => {
  const newValue = value.join(';');
  const url = new URL(window.location.href);

  url.searchParams.set(name, newValue);

  window.history.pushState('', '', url);
};

const getFilterFromUrl = (name, mappingFunction = val => val) => {
  if (typeof window === 'undefined') {
    return [];
  }

  const url = new URL(window.location.href);
  const value = url.searchParams.get(name);

  if (!value) {
    return null;
  }

  return value.split(';').map(mappingFunction);
};

const publicationInTimeRange = ({ acf: { year } }, range) => {
  if (!range) {
    return true;
  }

  const [min, max] = range;

  return year >= min && year <= max;
};

const filterPublications = (publications, { authors, tags, range }) =>
  publications.reduce((acc, publication) => {
    if (
      publicationContainsAllTags(publication, tags) === true &&
      publicationContainsAllAuthors(publication, authors) === true &&
      publicationInTimeRange(publication, range)
    ) {
      acc.push(publication);
    }

    return acc;
  }, []);

const Page = ({
  data: {
    publications: { nodes: publications }
  }
}) => {
  const urlAuthors = getFilterFromUrl('authors');
  const urlTags = getFilterFromUrl('keywords');
  const urlRange = getFilterFromUrl('range', year => parseInt(year, 10));
  const [
    minPublicationYear,
    maxPublicationYear
  ] = extractPublicationYearExtremes(publications);

  // eslint-disable-next-line no-unused-vars
  const [filter, setFilter] = useState({
    publications: filterPublications(publications, {
      authors: urlAuthors,
      tags: urlTags,
      range: urlRange
    }),
    authors: urlAuthors || [],
    tags: urlTags || [],
    range: urlRange || [minPublicationYear, maxPublicationYear]
  });

  return (
    <>
      <Helmet title="Publications" />

      <Constraint>
        <h2>Filter</h2>

        <h3>Author</h3>
        <Select
          options={extractPublicationsAuthors(publications)}
          defaultValue={filter.authors.map(author => ({
            value: author,
            label: author
          }))}
          onChange={selected => {
            const authors = selected.map(({ value }) => value);

            setFilter(state => ({
              ...state,
              authors,
              publications: filterPublications(publications, {
                authors,
                tags: filter.tags
              })
            }));

            setUrlForFilter('authors', authors);
          }}
          isMulti
          isSearchable
        />

        <h3>Keywords</h3>
        <Select
          options={extractPublicationsTags(publications)}
          defaultValue={filter.tags.map(tag => ({
            value: tag,
            label: tag
          }))}
          onChange={selected => {
            const tags = selected.map(({ value }) => value);

            setFilter(state => ({
              ...state,
              tags,
              publications: filterPublications(publications, {
                authors: filter.authors,
                tags
              })
            }));

            setUrlForFilter('keywords', tags);
          }}
          isMulti
          isSearchable
        />

        <h3>Year of publication</h3>
        <Range
          min={minPublicationYear}
          max={maxPublicationYear}
          defaultValue={filter.range}
          onChange={value => {
            setFilter(state => ({
              ...state,
              range: value,
              publications: filterPublications(publications, {
                authors: filter.authors,
                tags: filter.tags,
                range: value
              })
            }));

            setUrlForFilter('range', value);
          }}
          allowCross={false}
          dots
        />
      </Constraint>

      <h1>Publications ({filter.publications.length})</h1>

      {filter.publications && (
        <PublicationsList publications={filter.publications} />
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
