import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mixins } from '../../token';

export default css`
  .menu {
    margin-bottom: 6rem;
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
    ${mixins.text('small')}

    border-bottom: 0.25rem solid transparent;
    color: ${colors.blueBrand};
    display: inline-block;
    font-weight: 700;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    text-decoration: none;
  }

  a:hover,
  a:focus {
    border-bottom-color: currentColor;
  }
`;

export const linkActive = css.resolve`
  a {
    ${mixins.text('small')}

    border-bottom-color: currentColor;
    color: ${colors.greenBrand};
    font-weight: 700;
  }
`;
