import Link from 'gatsby-link';
import React from 'react';
import { graphql } from 'gatsby';

import AuthorList from '../../author-list';
import style, { linkTitle, linkPicture } from './style';
import Picture from '../../picture';
import TagList from '../../tag-list';

export const fragment = graphql`
  fragment publicationListItem on WpPublication {
    slug
    title
    featuredImage {
      node {
        localFile {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...Picture
            }
          }
        }
      }
    }
    tags {
      nodes {
        slug
        name
      }
    }
    acf {
      author {
        name
      }
      year
    }
  }
`;

export default ({
  acf: { author, year },
  tags: { nodes: tags },
  title,
  featuredImage,
  url,
  onFilter,
}) => (
  <div className="publication">
    <style jsx>{style}</style>
    {linkTitle.styles}
    {linkPicture.styles}

    <div className="cover-image-container">
      <p className="year">{year}</p>

      {featuredImage?.node?.localFile && (
        <Link to={url} className={linkPicture.className} rel="nofollow">
          <Picture image={featuredImage.node.localFile} />
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
          <AuthorList authors={author} onFilter={onFilter} trim={5} />
        </div>
      )}

      {tags && (
        <div className="tags-container">
          <TagList onFilter={onFilter} tags={tags} />
        </div>
      )}
    </div>
  </div>
);
