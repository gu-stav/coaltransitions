import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import React, { useState } from 'react';
import Select from 'react-select';

import withLayout from '../../components/with-layout';

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
    authors: [],
    tags: []
  });

  return (
    <>
      <h1>Publications</h1>

      <h3>Author</h3>
      <Select
        options={extractAuthors(publications)}
        onChange={selected => {
          setFilter(state => ({
            ...state,
            authors: selected.map(({ value }) => value)
          }));
        }}
        isMulti
        isSearchable
      />

      <h3>Keywords</h3>
      <Select
        options={extractTags(publications)}
        onChange={selected => {
          setFilter(state => ({
            ...state,
            tags: selected.map(({ value }) => value)
          }));
        }}
        isMulti
        isSearchable
      />

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
