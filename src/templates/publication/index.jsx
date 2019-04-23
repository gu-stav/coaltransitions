import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import React from 'react';

import style from './style';
import withLayout from '../../components/with-layout';

const Page = ({
  data: {
    publication: {
      acf: { abstract, year, subtitle, author, language },
      title,
      tags
    }
  }
}) => (
  <article className="publication-container">
    <style jsx>{style}</style>

    <div className="content-container">
      <header>
        <h1 className="title">
          {year && <small className="year">{year}</small>}
          {title}
          {subtitle && <small className="subtitle">{subtitle}</small>}
        </h1>

        {language &&
          language.map(
            ({ language: downloadLanguage, external_url: externalUrl }) => (
              <a href={externalUrl}>{downloadLanguage}</a>
            )
          )}
      </header>

      {abstract && (
        <div
          className="abstract"
          dangerouslySetInnerHTML={{ __html: abstract }}
        />
      )}
    </div>

    <div className="meta-container">
      {author && (
        <div className="meta-block">
          <h3>Authors</h3>

          <ul>
            {author.map(({ name }) => (
              <li>
                <Link to={`/publications/?authors=${name}`}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {tags && (
        <div className="meta-block">
          <h3>Keywords</h3>

          <ul>
            {tags.map(({ slug, name }) => (
              <li>
                <Link to={`/publications/?keywords=${slug}`}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {year && (
        <div className="meta-block">
          <h3>Year of publication</h3>

          <p>2019</p>
        </div>
      )}
    </div>
  </article>
);

export default withLayout(Page);

export const query = graphql`
  query($wordpressId: Int) {
    publication: wordpressWpPublications(wordpress_id: { eq: $wordpressId }) {
      title
      tags {
        name
        slug
      }
      acf {
        abstract
        year
        subtitle
        author {
          name
        }
        language {
          language
          external_url
          file {
            link
          }
        }
      }
    }
  }
`;
