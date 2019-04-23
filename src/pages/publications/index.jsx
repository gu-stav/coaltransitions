import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import React, { useState } from 'react';
import Select from 'react-select';

import withLayout from '../../components/with-layout';

const setUrlForFilter = (name, value) => {
  const newValue = value.join(';');
  const url = new URL(window.location.href);

  url.searchParams.set(name, newValue);

  window.history.pushState('', '', url);
};

const getFilterFromUrl = name => {
  const url = new URL(window.location.href);
  const value = url.searchParams.get(name);

  return value ? value.split(';') : [];
};

const extractAuthors = publications => {
  const authors = publications.reduce((acc, publication) => {
    const {
      acf: { author: publicationAuthors }
    } = publication;

    publicationAuthors.forEach(({ name }) => {
      acc.add(name);
    });

    return acc;
  }, new Set());

  return Array.from(authors.entries(), ([author]) => {
    return {
      value: author,
      label: author
    };
  });
};

const extractTags = publications => {
  const tags = publications.reduce((acc, publication) => {
    const { tags: publicationTags } = publication;

    publicationTags.forEach(({ name }) => {
      acc.add(name);
    });

    return acc;
  }, new Set());

  return Array.from(tags.entries(), ([tag]) => {
    return {
      value: tag,
      label: tag
    };
  });
};

const Page = ({
  data: {
    publications: { nodes: publications }
  }
}) => {
  // eslint-disable-next-line no-unused-vars
  const [filter, setFilter] = useState({
    authors: getFilterFromUrl('authors'),
    tags: getFilterFromUrl('keywords')
  });

  return (
    <>
      <h2>Filter</h2>

      <h3>Author</h3>
      <Select
        options={extractAuthors(publications)}
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
        options={extractTags(publications)}
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

      <h1>Publications ({publications.length})</h1>

      {publications && (
        <ul>
          {publications.map(({ slug, title }) => (
            <li>
              <h2>
                <Link to={`/publications/${slug}/`}>{title}</Link>
              </h2>
            </li>
          ))}
        </ul>
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
        tags {
          name
        }
        acf {
          author {
            name
          }
        }
      }
    }
  }
`;
