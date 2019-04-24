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
import { getFilterFromUrl, setUrlForFilter } from '../../lib/url';
import PublicationsList from '../../components/publication-list';
import withLayout from '../../components/with-layout';

import 'rc-slider/assets/index.css';

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
    authors: urlAuthors || [],
    tags: urlTags || [],
    range: urlRange || [minPublicationYear, maxPublicationYear]
  });

  const filteredPublications = filterPublications(publications, {
    authors: filter.authors,
    tags: filter.tags,
    range: filter.range
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
              authors
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
              tags
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
              range: value
            }));

            setUrlForFilter('range', value);
          }}
          allowCross={false}
          dots
        />
      </Constraint>

      <h1>Publications ({filteredPublications.length})</h1>

      {filteredPublications && (
        <PublicationsList publications={filteredPublications} />
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
