import Link from 'gatsby-link';
import React from 'react';

import AuthorList from '../../author-list';
import Constraint from '../../constraint';
import style, { linkTitle } from './style';
import TagList from '../../tag-list';

export default ({ acf: { author, year }, tags, title, featuredImage, url }) => (
  <Constraint>
    <div className="publication">
      <style jsx>{style}</style>
      {linkTitle.styles}

      <div className="cover-image-container">
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
              alt={`Cover of publication ${title}`}
              loading="lazy"
            />
          </picture>
        )}
      </div>

      <div className="content-container">
        <h2 className="title">
          <Link to={url} className={linkTitle.className}>
            <span dangerouslySetInnerHTML={{ __html: title }} />
          </Link>
        </h2>

        <p className="year">{year}</p>

        {author && <AuthorList authors={author} trim={5} />}

        {tags && <TagList tags={tags} />}
      </div>
    </div>
  </Constraint>
);
