import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mixins, mq } from '../../token';

export default css`
  ul {
    ${mixins.resetList()}

    align-self: flex-start;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    margin-top: -0.5rem;
  }

  @media ${mq.tablet} {
    ul {
      align-self: flex-end;
      flex-direction: row;
      margin: -3rem 5rem 3rem auto;
    }
  }

  @media ${mq.desktop} {
    ul {
      margin-top: -4rem;
    }
  }

  li + li {
    margin-top: 0.5rem;
  }

  @media ${mq.tablet} {
    li + li {
      margin-left: 0.5rem;
      margin-top: 0;
    }
  }
`;

export const item = css.resolve`
  a {
    ${mixins.text('small')}

    background-color: ${colors.blueAction};
    color: white;
    font-weight: 700;
    padding: 0.15rem 0.5rem;
    text-decoration: none;
    text-transform: uppercase;
  }

  a[aria-current="page"] {
    background-color: ${colors.greenAction};
  }

  @mdia ${mq.tablet} {
    a {
      ${mixins.text('small', 'tablet')}
    }
  }

  @mdia ${mq.desktop} {
    a {
      ${mixins.text('small', 'desktop')}
    }
  }
`;
