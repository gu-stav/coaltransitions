import React from 'react';

import style from './style';

export default ({ image, ...rest }) => (
  <picture {...rest}>
    <style jsx>{style}</style>

    <source type="image/webp" srcSet={image.childImageSharp.fluid.srcSetWebp} />
    <source type="image/png" srcSet={image.childImageSharp.fluid.srcSet} />

    {/* eslint-disable-next-line jsx-a11y/alt-text */}
    <img src={image.childImageSharp.fluid.src} loading="lazy" />
  </picture>
);
