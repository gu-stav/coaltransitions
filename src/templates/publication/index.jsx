import { graphql } from 'gatsby';
import React from 'react';

export default ({
  data: {
    publication: {
      acf: { abstract, year, subtitle, author },
      title
    }
  }
}) => (
  <article>
    <header>
      <h1>
        {title}
        {(year || subtitle) && (
          <small>
            {year}
            {(subtitle || year) && ` - `}
            {subtitle}
          </small>
        )}
      </h1>

      {author && (
        <ul>
          {author.map(({ name }) => (
            <li>{name}</li>
          ))}
        </ul>
      )}
    </header>

    {abstract && <div dangerouslySetInnerHTML={{ __html: abstract }} />}
  </article>
);

export const query = graphql`
  query($wordpressId: Int) {
    publication: wordpressWpPublications(wordpress_id: { eq: $wordpressId }) {
      title
      acf {
        abstract
        year
        subtitle
        author {
          name
        }
      }
    }
  }
`;
