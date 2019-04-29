/* eslint-disable import/prefer-default-export */

import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mixins } from '../../token';

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
    color: ${colors.greyDarkLight};
    content: '#';
    display: inline-block;
    margin-right: 0.05rem;
  }

  a:hover,
  a:focus {
    text-decoration: underline;
  }
`;
