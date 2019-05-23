import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { mq } from '../../../token';

export default css`
  .container {
    display: flex;
    justify-content: center;
    margin-bottom: 2.5rem;
  }

  @media ${mq.tablet} {
    .container {
      justify-content: flex-start;
    }
  }
`;

export const icon = css.resolve`
  svg {
    height: 1rem;
    margin-right: 0.5rem;
    width: 1rem;
  }
`;
