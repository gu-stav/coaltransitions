import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mixins } from '../../../token';

export default css`
  .publication {
    display: flex;
    flex-direction: row;
    padding: 1.5rem;
  }

  .title {
    margin-bottom: 1rem;
    margin-top: 0;
  }

  .year {
    ${mixins.text('small')}

    background-color: ${colors.greenBrand};
    color: white;
    display: inline-block;
    font-weight: 700;
    padding: 0 0.25rem;
  }

  .cover-image-container {
    flex: 0 0 auto;
    margin-right: 1.5rem;
    width: 25%;
  }

  .cover-image img {
    max-width: 100%;
  }
`;

export const linkTitle = css.resolve`
  a {
    ${mixins.text('big')};

    text-decoration: none;
  }
`;
