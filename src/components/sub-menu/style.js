import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mixins, mq } from '../../token';

export default css`
  ul {
    ${mixins.resetList()}

    display: flex;
    flex-direction: row;
    margin-bottom: 4rem;
    margin-top: -4rem;
  }

  li + li {
    margin-left: 0.5rem;
  }
`;

export const item = css.resolve`
  a {
    ${mixins.text('small')}

    background-color: ${colors.blueAction};
    color: white;
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
