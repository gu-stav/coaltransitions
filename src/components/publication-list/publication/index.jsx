import Link from 'gatsby-link';
import React from 'react';
import { graphql } from 'gatsby';

import AuthorList from '../../author-list';
import style, { linkTitle } from './style';
import TagList from '../../tag-list';

export default ({ acf: { author, year }, tags, title, featuredImage, url }) => (
  <div className="publication">
    <style jsx>{style}</style>
    {linkTitle.styles}

    <div className="cover-image-container">
      <p className="year">{year}</p>

      {featuredImage && featuredImage.localFile && (
        <Link to={url} className={linkTitle.className} rel="nofollow">
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
              alt={`Cover of publication ${title}`}
              loading="lazy"
            />
          </picture>
        </Link>
      )}
    </div>

    <div className="content-container">
      <h2 className="title">
        <Link to={url} className={linkTitle.className}>
          <span dangerouslySetInnerHTML={{ __html: title }} />
        </Link>
      </h2>

      {author && (
        <div className="author-container">
          <AuthorList authors={author} trim={5} />
        </div>
      )}

      {tags && (
        <div className="tags-container">
          <TagList tags={tags} />
        </div>
      )}
    </div>
  </div>
);

export const fragment = graphql`
  fragment publicationListItem on wordpress__wp_publications {
    wordpress_id
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
      slug
      name
    }
    acf {
      author {
        name
      }
      year
    }
  }
`;
