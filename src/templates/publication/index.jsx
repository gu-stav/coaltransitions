import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import React from 'react';

import AuthorList from '../../components/author-list';
import Constraint from '../../components/constraint';
import style from './style';
import TagList from '../../components/tag-list';
import withLayout from '../../components/with-layout';

const Page = ({
  data: {
    publication: {
      acf: { abstract, year, subtitle, author, language, institute, employer },
      title,
      featuredImage,
      tags
    }
  }
}) => (
  <Constraint>
    <Helmet title={title} />

    <article className="publication">
      <style jsx>{style}</style>

      <header className="header">
        <h1 className="title">
          <span dangerouslySetInnerHTML={{ __html: title }} />

          {year && (
            <div className="year">
              <small className="year-text">{year}</small>
            </div>
          )}
        </h1>

        {subtitle && <p className="subtitle">{subtitle}</p>}

        {language &&
          language.map(
            ({ language: downloadLanguage, external_url: externalUrl }) => (
              <a href={externalUrl}>{downloadLanguage}</a>
            )
          )}

        {featuredImage && featuredImage.localFile && (
          <picture className="cover-image">
            <source
              type="image/webp"
              srcSet={featuredImage.localFile.childImageSharp.fluid.srcSetWebp}
            />
            <source
              type="image/png"
              srcSet={featuredImage.localFile.childImageSharp.fluid.srcSet}
            />

            <img
              src={featuredImage.localFile.childImageSharp.fluid.src}
              alt=""
            />
          </picture>
        )}
      </header>

      <div className="body">
        {abstract && (
          <div
            className="abstract"
            dangerouslySetInnerHTML={{ __html: abstract }}
          />
        )}
      </div>

      <div className="meta">
        {tags && (
          <div className="meta-block">
            <h3 className="meta-block-title">Keywords</h3>

            <TagList tags={tags} />
          </div>
        )}

        {author && (
          <div className="meta-block">
            <h3 className="meta-block-title">Authors</h3>
            <AuthorList authors={author} />
          </div>
        )}

        {institute && institute.length > 0 && (
          <div className="meta-block">
            <h3 className="meta-block-title">Insitute</h3>
            <ul className="meta-block-list">
              {institute.map(({ name }) => (
                <li>
                  <p className="meta-block-content">{name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {employer && (
          <div className="meta-block">
            <h3 className="meta-block-title">Employer</h3>

            <p className="meta-block-content">{employer}</p>
          </div>
        )}

        {year && (
          <div className="meta-block">
            <h3 className="meta-block-title">Year of publication</h3>

            <p className="meta-block-content">2019</p>
          </div>
        )}
      </div>
    </article>
  </Constraint>
);

export default withLayout(Page);

export const query = graphql`
  query($wordpressId: Int) {
    publication: wordpressWpPublications(wordpress_id: { eq: $wordpressId }) {
      title
      featuredImage: featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 800) {
              src
              srcSet
              srcSetWebp
            }
          }
        }
      }
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
        employer
        institute {
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
