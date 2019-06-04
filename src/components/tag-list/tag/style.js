/* eslint-disable import/prefer-default-export */

import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mixins, mq } from '../../../token';

export const linkStyle = css.resolve`
  a {
    color: ${colors.blueAction};
    letter-spacing: 0.01rem;
    margin-right: 0.5rem;
    text-decoration: none;
  }

  a,
  a::before {
    ${mixins.text('small')};

    font-weight: 700;
  }

  @media ${mq.tablet} {
    a,
    a::before {
      ${mixins.text('small', 'tablet')};

      font-weight: 600;
    }
  }

  @media ${mq.desktop} {
    a,
    a::before {
      ${mixins.text('small', 'desktop')};

      font-weight: 600;
    }
  }

  a::before {
    content: '#';
    display: inline-block;
    margin-right: 0.05rem;
    opacity: 0.5;
  }

  a:hover,
  a:focus {
    color: ${colors.blueActionActive};
    text-decoration: underline;
  }
`;
