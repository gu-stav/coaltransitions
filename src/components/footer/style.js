import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { mixins, mq } from '../../token';

export default css`
  footer {
    margin-bottom: 4rem;
    position: relative;
    overflow: hidden;
    width: 100%;
  }

  .background {
    margin-left: -2.5rem;
    width: calc(100% + 5rem);
  }

  @media ${mq.tablet} {
    .background {
      margin-left: -5rem;
      width: calc(100% + 10rem);
    }
  }

  ul {
    ${mixins.resetList()}

    display: flex;
    justify-content: center;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, 1rem);
    width: 100%;
  }

  @media ${mq.tablet} {
    ul {
      transform: translate(-50%, 3rem);
    }
  }

  @media ${mq.desktop} {
    ul {
      transform: translate(-50%, 5rem);
    }
  }

  li + li {
    margin-left: 0.5rem;
  }

  @media ${mq.tablet} {
    li + li {
      margin-left: 1.5rem;
    }
  }
`;

export const item = css.resolve`
  a {
    ${mixins.text('small')}

    color: white;
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
  }

  @media ${mq.tablet} {
    a {
      ${mixins.text('regular-big', 'tablet')}
    }
  }
`;
