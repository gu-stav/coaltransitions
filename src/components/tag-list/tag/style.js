/* eslint-disable import/prefer-default-export */

import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mixins } from '../../../token';

export const linkStyle = css.resolve`
  a {
    margin-right: 0.5rem;
    text-decoration: none;
  }

  a,
  a::before {
    ${mixins.text('small')};

    font-weight: 700;
  }

  a::before {
    opacity: 0.7;
    transition: opacity 200ms ease-in-out;
  }

  a::before {
    color: ${colors.blueAction};
    content: '#';
    display: inline-block;
    margin-right: 0.05rem;
  }

  a:hover,
  a:focus {
    color: ${colors.blueActionActive};
    text-decoration: underline;
  }

  a:hover::before,
  a:focus::before {
    opacity: 1;
  }
`;
