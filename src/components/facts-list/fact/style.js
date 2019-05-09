import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mixins } from '../../../token';

export default css`
  .argument {
    display: flex;
    flex-direction: column;
  }

  .image-container {
    display: flex;
    flex-direction: row;
    margin: 0;
  }

  .caption {
    align-self: flex-end;
    padding: 1.5rem;
    transform: translateY(-4rem);
  }

  .intro-container {
    background-color: ${colors.blueBrand};
    color: white;
    justify-self: flex-end;
    margin-left: auto;
    padding: 2.5rem;
    margin-top: -4rem;
    width: 75%;
  }

  .argument--has-theme-green .intro-container {
    background-color: ${colors.greenBrand};
  }

  .title {
    margin-bottom: 0;
    margin-top: 0;
  }

  .excerpt {
    ${mixins.text()}
  }
`;

export const titleLink = css.resolve`
  a {
    ${mixins.text('huge')}
  }
`;
