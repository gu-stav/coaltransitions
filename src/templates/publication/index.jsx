import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import React from 'react';

import AuthorList from '../../components/author-list';
import Button from '../../components/button';
import Constraint from '../../components/constraint';
import DownloadIcon from '../../../static/icons/download.svg';
import Picture from '../../components/picture';
import Richtext from '../../components/richtext';
import style, { buttonIcon } from './style';
import TagList from '../../components/tag-list';
import withLayout from '../../components/with-layout';

const HUMAN_READABLE_LANGUAGES = {
  en: 'English',
  de: 'German',
};

const Page = ({
  data: {
    publication: {
      acf: {
        abstract,
        year,
        subtitle,
        author,
        language,
        institute,
        employer,
        published_in: publishedIn,
      },
      title,
      featuredImage,
      tags,
    },
  },
}) => (
  <Constraint superwide>
    <Helmet title={title} />

    <article className="publication">
      <style jsx>{style}</style>

      <header className="header">
        <h1 className="title">
          <span dangerouslySetInnerHTML={{ __html: title }} />
        </h1>

        <div className="title-meta-container">
          {(subtitle || publishedIn) && (
            <p className="subtitle">
              {subtitle} {subtitle && publishedIn && ' | '} {publishedIn}
            </p>
          )}
          {year && (
            <div className="year">
              <small className="year-text">{year}</small>
            </div>
          )}

          {language && (
            <div className="languages-container">
              {buttonIcon.styles}

              {language.map(
                ({ language: downloadLanguage, external_url: externalUrl }) => (
                  <Button
                    key={`language-${downloadLanguage}`}
                    to={externalUrl}
                    theme="blue"
                    external
                  >
                    {HUMAN_READABLE_LANGUAGES[downloadLanguage]}
                    <DownloadIcon className={buttonIcon.className} />
                  </Button>
                )
              )}
            </div>
          )}
        </div>

        {featuredImage && featuredImage.localFile && (
          <div className="cover-image-container">
            <Picture image={featuredImage.localFile} />
          </div>
        )}
      </header>

      <div className="body">
        {abstract && (
          <div className="abstract">
            <Richtext content={abstract} />
          </div>
        )}
      </div>

      <div className="meta">
        {tags && (
          <div className="meta-block">
            <h3 className="meta-block-title">Keywords</h3>

            <div>
              <TagList tags={tags} />
            </div>
          </div>
        )}

        {author && (
          <div className="meta-block">
            <h3 className="meta-block-title">Authors</h3>
            <div>
              <AuthorList authors={author} />
            </div>
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
        published_in
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
