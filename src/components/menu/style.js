import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mixins } from '../../token';

export default css`
  .menu {
    align-items: center;
    align-self: flex-start;
    display: flex;
    flex-direction: row;
    margin-bottom: 6rem;
    margin-left: 1.5rem;
    margin-top: 2rem;
  }

  ul {
    ${mixins.resetList()}
    display: flex;
    flex-direction: row;
  }

  li + li {
    margin-left: 1.5rem;
  }
`;

export const link = css.resolve`
  a {
    ${mixins.text()}

    border-bottom: 0.4rem solid transparent;
    color: ${colors.blueBrand};
    display: inline-block;
    font-weight: 700;
    padding-top: 0.2rem;
    text-decoration: none;
    text-transform: uppercase;
  }

  a:hover,
  a:focus {
    border-bottom-color: currentColor;
  }
`;

export const linkActive = css.resolve`
  a {
    border-bottom-color: currentColor;
    color: ${colors.greenBrand};
    font-weight: 700;
  }
`;

export const logo = css.resolve`
  svg {
    height: 6rem;
    width: 15rem;
  }
`;

export const logoLink = css.resolve`
  a {
    margin-right: 2.5rem;
  }
`;
