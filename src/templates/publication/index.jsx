import { graphql } from 'gatsby';
import React from 'react';

import style from './style';
import withLayout from '../../components/with-layout';

const Page = ({
  data: {
    publication: {
      acf: { abstract, year, subtitle, author },
      title
    }
  }
}) => (
  <article>
    <style jsx>{style}</style>

    <header>
      <h1 className="title">
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

    {abstract && (
      <div
        className="abstract"
        dangerouslySetInnerHTML={{ __html: abstract }}
      />
    )}
  </article>
);

export default withLayout(Page);

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
