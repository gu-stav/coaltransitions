import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import React from 'react';

export default ({
  data: {
    publications: { nodes: publications }
  }
}) => (
  <>
    <h1>Publications</h1>

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

export const query = graphql`
  query {
    publications: allWordpressWpPublications {
      nodes {
        slug
        title
        acf {
          year
          subtitle
          author {
            name
          }
        }
      }
    }
  }
`;
