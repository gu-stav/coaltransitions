/* eslint-disable import/prefer-default-export */

import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mixins, mq } from '../../token';

export const linkStyle = css.resolve`
  a,
  button {
    ${mixins.text('mini')}

    align-items: center;
    border-radius: 1rem;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: row;
    font-weight: 700;
    padding: 0.6rem 1rem;
    text-decoration: none;
    text-transform: uppercase;
  }

  @media ${mq.tablet} {
    a,
    button {
      ${mixins.text('mini', 'tablet')}

      border-radius: 1.5rem;
      font-weight: 700;
      padding-left: 1.25rem;
      padding-right: 1.25rem;
    }
  }

  @media ${mq.desktop} {
    a,
    button {
      ${mixins.text('mini', 'desktop')}

      font-weight: 700;
    }
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
