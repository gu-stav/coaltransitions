import React from 'react';

import style from './style';

export default ({ image, type = 'fluid', className, ...rest }) => (
  <picture {...rest}>
    <style jsx>{style}</style>

    <source type="image/webp" srcSet={image.childImageSharp[type].srcSetWebp} />
    <source type="image/png" srcSet={image.childImageSharp[type].srcSet} />

    {/* eslint-disable-next-line jsx-a11y/alt-text */}
    <img
      src={image.childImageSharp[type].src}
      loading="lazy"
      className={className}
    />
  </picture>
);
