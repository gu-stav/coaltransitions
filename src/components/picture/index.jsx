import React from 'react';

import style from './style';

export default ({ image, type = 'fluid', className, ...rest }) => {
  const imageByType =
    image && image.childImageSharp && image.childImageSharp[type];

  if (!imageByType) {
    return null;
  }

  const { srcSetWebp, srcSet, src } = imageByType;

  return (
    <picture {...rest}>
      <style jsx>{style}</style>

      <source type="image/webp" srcSet={srcSetWebp} />
      <source type="image/png" srcSet={srcSet} />

      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img src={src} loading="lazy" className={className} />
    </picture>
  );
};
