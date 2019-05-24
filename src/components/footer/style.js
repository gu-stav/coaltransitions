import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { mixins, mq } from '../../token';

export default css`
  footer {
    display: flex;
    justify-content: center;
    height: 35rem;
    margin-bottom: 4rem;
    position: relative;
    overflow: hidden;
    width: 100%;
  }

  .background {
    margin-left: -5rem;
    position: absolute;
    top: 0;
    width: calc(100% + 20rem);
    z-index: 1;
  }

  ul {
    ${mixins.resetList()}

    align-self: center;
    display: flex;
    margin-left: -8rem;
    margin-top: 12rem;
    z-index: 2;
  }

  li + li {
    margin-left: 1.5rem;
  }
`;

export const item = css.resolve`
  a {
    ${mixins.text('regular-big')}

    color: white;
    text-decoration: none;
    text-transform: uppercase;
  }

  @media ${mq.tablet} {
    a {
      ${mixins.text('regular-big', 'tablet')}
    }
  }

  @media ${mq.desktop} {
    a {
      ${mixins.text('regular-big', 'desktop')}
    }
  }
`;
