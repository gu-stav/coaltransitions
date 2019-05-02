/* eslint-disable import/prefer-default-export */

import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mixins } from '../../token';

export const linkStyle = css.resolve`
  a {
    ${mixins.text()}

    background-color: white;
    border-radius: 0.75rem;
    color: ${colors.blueMedium};
    padding: 0.5rem;
    text-decoration: none;
  }
`;
