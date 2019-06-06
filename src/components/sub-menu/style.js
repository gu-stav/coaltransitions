import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mixins, mq } from '../../token';

export default css`
  ul {
    ${mixins.resetList()}

    align-items: flex-end;
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    margin-top: 0;
  }

  @media ${mq.tablet} {
    ul {
      align-self: flex-end;
      flex-direction: row;
      flex-wrap: wrap;
      margin: -1rem 1rem 3rem 1rem;
    }
  }

  @media ${mq.desktop} {
    ul {
      margin-right: 5rem;
      margin-top: -3rem;
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
    box-decoration-break: clone;
    color: white;
    font-weight: 700;
    letter-spacing: 0.025rem;
    padding: 0.25rem 1rem 0.25rem 0.5rem;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
  }

  @media ${mq.tablet} {
    a {
      ${mixins.text('small', 'tablet')}

      font-weight: 700;
      padding: 0.25rem;
    }
  }

  @media ${mq.desktop} {
    a {
      padding: 0.3rem 0.5rem;
    }
  }

  a[aria-current="page"] {
    background-color: ${colors.greenAction};
  }

  a:not([aria-current="page"]):hover,
  a:not([aria-current="page"]):focus {
    background-color: ${colors.blueActionActive};
  }
`;
