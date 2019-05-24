import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mixins, mq } from '../../token';

export default css`
  .menu {
    align-items: center;
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0.5rem 2rem 0.5rem;
    width: 100%;
  }

  @media ${mq.tablet} {
    .menu {
      flex-direction: row;
      padding: 1rem 1rem 3rem 1rem;
    }
  }

  @media ${mq.desktop} {
    .menu {
      padding-bottom: 4rem;
    }
  }

  ul {
    ${mixins.resetList()}

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }

  @media ${mq.tablet} {
    ul {
      justify-content: flex-start;
      width: auto;
    }
  }

  li + li {
    margin-left: 1rem;
  }

  @media ${mq.desktop} {
    li + li {
      margin-left: 2.5rem;
    }
  }
`;

export const link = css.resolve`
  a {
    ${mixins.text('small')}

    border-bottom: 0.2rem solid transparent;
    color: ${colors.blueBrand};
    display: inline-block;
    font-weight: 700;
    padding-top: 0.2rem;
    text-decoration: none;
    text-transform: uppercase;
  }

  @media ${mq.tablet} {
    a {
      ${mixins.text('regular', 'tablet')}

      border-bottom-width: 0.4rem;
      font-weight: 700;
    }
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
    height: 3rem;
    width: 8rem;
  }

  @media ${mq.desktop} {
    svg {
      height: 6rem;
      width: 14.5rem;
    }
  }
`;

export const logoLink = css.resolve`
  a {
    margin-right: 1rem;
  }
`;
