import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors } from '../../../token';

export default css`
  .container {
    display: flex;
    justify-content: center;
    position: relative;
  }

  .container::before {
    border-bottom: 1px solid ${colors.blueBrand};
    content: '';
    height: 1px;
    position: absolute;
    top: calc(50% - 1px);
    width: 100%;
    z-index: 1;
  }

  .button-container {
    border: 1rem solid white;
    position: relative;
    z-index: 2;
  }
`;

export const icon = css.resolve`
  svg {
    height: 1rem;
    margin-right: 0.5rem;
    width: 1rem;
  }
`;
