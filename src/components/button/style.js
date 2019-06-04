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
    letter-spacing: 0.075rem;
    padding: 0.65rem 1.25rem;
    text-decoration: none;
    text-transform: uppercase;
  }

  @media ${mq.tablet} {
    a,
    button {
      ${mixins.text('mini', 'tablet')}

      border-radius: 1.5rem;
      font-weight: 700;
      letter-spacing: 0.1rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }

  @media ${mq.desktop} {
    a,
    button {
      ${mixins.text('mini', 'desktop')}

      font-weight: 700;
      letter-spacing: 0.15rem;
    }
  }

  a {
    background-color: white;
    color: ${colors.blueBrand};
  }

  button {
    background-color: ${colors.greyMedium};
    border: none;
    color: white;
    cursor: pointer;
  }

  button:hover,
  button:focus {
    background-color: ${colors.blueAction};
  }

  a.theme--blue,
  button.theme--blue {
    background-color: ${colors.blueAction};
    color: white;
  }

  a.theme--blue:hover,
  a.theme--blue:focus,
  button.theme--blue:hover,
  button.theme--blue:focus {
    background-color: ${colors.blueActionActive};
  }
`;
