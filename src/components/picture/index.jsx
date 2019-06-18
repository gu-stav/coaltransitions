import classnames from 'classnames';
import React from 'react';

import style from './style';

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

  const { srcSetWebp, srcSet, src } = imageByType;

  return (
    <>
      <style jsx>{style}</style>

      <picture {...rest}>
        <source type="image/webp" srcSet={srcSetWebp} />
        <source type="image/png" srcSet={srcSet} />

        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img src={src} loading="lazy" className={className} />
      </picture>

      {caption && (
        <figcaption
          className={classnames(captionClassName)}
          dangerouslySetInnerHTML={{ __html: caption }}
        />
      )}
    </>
  );
};
