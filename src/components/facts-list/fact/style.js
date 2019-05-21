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
    flex: 0 0 auto;
    flex-direction: row;
    margin: 0;
    width: 50%;
  }

  .image img {
    width: 100%;
  }

  .caption {
    align-self: flex-end;
    padding: 1.5rem;
    transform: translateY(-4rem);
  }

  .intro-container {
    align-self: flex-end;
    background-color: ${colors.blueBrand};
    color: white;
    flex: 1 0 auto;
    margin-left: auto;
    padding: 2.5rem 4.5rem 2.5rem 2.5rem;
    position: relative;
    transform: translateY(-50%);
    width: 55%;
  }

  .argument--has-theme-green .intro-container {
    background-color: ${colors.greenBrand};
  }

  .index {
    ${mixins.text('medium')}

    background-color: ${colors.greenBrand};
    left: 0;
    padding: 0.25rem 1.5rem;
    position: absolute;
    top: 0;
    transform: translateY(-100%);
  }

  .argument--has-theme-green .index {
    background-color: ${colors.blueBrand};
  }

  .title {
    margin-bottom: 0;
    margin-top: 0;
  }

  .intro {
    ${mixins.text('medium')}

    font-weight: 400;
    margin-bottom: 1.5rem;
    margin-top: 2.5rem;
  }
`;

export const titleLink = css.resolve`
  a {
    ${mixins.text('extra-big')}

    text-decoration: none;
  }
`;

export const imageLink = css.resolve`
  a {
    flex: 1 0 100%;
  }
`;
