/* eslint-disable import/prefer-default-export */

import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mixins } from '../../token';

export const linkStyle = css.resolve`
  a,
  button {
    ${mixins.text('mini')}

    border-radius: 1rem;
    padding: 0.4rem 1rem;
    text-decoration: none;
    text-transform: uppercase;
  }

  a {
    background-color: white;
    color: ${colors.blueBrand};
  }

  button {
    background-color: ${colors.greyDark};
    border: none;
    color: white;
    cursor: pointer;
  }

  button:hover,
  button:focus {
    background-color: ${colors.blueAction};
  }
`;
