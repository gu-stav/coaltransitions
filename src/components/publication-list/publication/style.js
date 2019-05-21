import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mixins } from '../../../token';

export default css`
  .publication {
    display: flex;
    flex-direction: row;
    padding-bottom: 1.5rem;
    padding-top: 1.5rem;
  }

  .title {
    margin-bottom: 1.5rem;
    margin-top: 0;
  }

  .year {
    ${mixins.text('small')}

    align-self: flex-start;
    background-color: ${colors.greenBrand};
    color: white;
    display: inline-block;
    font-weight: 700;
    margin-bottom: 0;
    margin-top: 0;
    padding: 0.15rem 0.5rem;
  }

  .cover-image-container {
    background-color: ${colors.greyLight};
    border: 1px solid ${colors.greyDark};
    flex: 0 0 auto;
    margin-right: 1.5rem;
    min-height: 11rem;
    width: 15%;
  }

  .cover-image img {
    max-width: 100%;
  }

  .content-container {
    display: flex;
    flex-direction: column;
  }

  .tags-container {
    justify-self: flex-end;
    margin-top: auto;
  }
`;

export const linkTitle = css.resolve`
  a {
    ${mixins.text('regular-big')};

    text-decoration: none;
  }

  a:hover,
  a:focus {
    color: ${colors.blueAction};
    text-decoration: underline;
  }
`;
