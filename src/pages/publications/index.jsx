import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import React, { useState } from 'react';
import Select from 'react-select';

import Constraint from '../../components/constraint';
import {
  publicationContainsAllTags,
  publicationContainsAllAuthors,
  extractPublicationsAuthors,
  extractPublicationsTags
} from '../../lib/publication';
import withLayout from '../../components/with-layout';

const setUrlForFilter = (name, value) => {
  const newValue = value.join(';');
  const url = new URL(window.location.href);

  url.searchParams.set(name, newValue);

  window.history.pushState('', '', url);
};

const getFilterFromUrl = name => {
  if (typeof window === 'undefined') {
    return [];
  }

  const url = new URL(window.location.href);
  const value = url.searchParams.get(name);

  return value ? value.split(';') : [];
};

const filterPublications = (publications, { authors, tags }) =>
  publications.reduce((acc, publication) => {
    if (
      publicationContainsAllTags(publication, tags) === true &&
      publicationContainsAllAuthors(publication, authors) === true
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

  // eslint-disable-next-line no-unused-vars
  const [filter, setFilter] = useState({
    publications: filterPublications(publications, {
      authors: urlAuthors,
      tags: urlTags
    }),
    authors: urlAuthors,
    tags: urlTags
  });

  return (
    <main>
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
      </Constraint>

      <h1>Publications ({filter.publications.length})</h1>

      {filter.publications && (
        <ul>
          {filter.publications.map(({ slug, title }) => (
            <li>
              <h2>
                <Link to={`/publications/${slug}/`}>
                  <span dangerouslySetInnerHTML={{ __html: title }} />
                </Link>
              </h2>
            </li>
          ))}
        </ul>
      )}
    </main>
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
