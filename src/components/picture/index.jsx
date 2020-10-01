import { graphql } from 'gatsby';
import classnames from 'classnames';
import React from 'react';

import style from './style';

export const fragment = graphql`
  fragment Picture on ImageSharpFluid {
    height: presentationHeight
    src
    srcSet
    srcSetWebp
    width: presentationWidth
  }
`;

export default ({
  image,
  type = 'fluid',
  className,
  caption = null,
  captionClassName = null,
  ...rest
}) => {
  const imageByType =
    image && image.childImageSharp && image.childImageSharp[type];

  if (!imageByType) {
    return null;
  }

  const { srcSetWebp, srcSet, src, width, height } = imageByType;

  return (
    <>
      <style jsx>{style}</style>

      <figure>
        <picture {...rest}>
          <source type="image/webp" srcSet={srcSetWebp} />
          <source type="image/png" srcSet={srcSet} />

          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img
            src={src}
            loading="lazy"
            className={className}
            width={width}
            height={height}
          />
        </picture>

        {caption && (
          <figcaption
            className={classnames(captionClassName)}
            dangerouslySetInnerHTML={{ __html: caption }}
          />
        )}
      </figure>
    </>
  );
};
