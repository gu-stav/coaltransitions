import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { mixins } from '../../../token';

export default css`
  .publication {
    padding: 1.5rem;
  }

  .header {
    display: flex;
    flex-direction: row;
  }

  .title {
    ${mixins.textBig};

    margin-bottom: 1rem;
    margin-top: 0;
  }

  .cover-image-container {
    flex: 0 0 auto;
    margin-left: 1.5rem;
    width: 25%;
  }

  .cover-image img {
    max-width: 100%;
  }

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    margin-bottom: 1rem;
    padding-left: 0;
  }
`;

export const linkTitle = css.resolve`
  a {
    text-decoration: none;
  }
`;
