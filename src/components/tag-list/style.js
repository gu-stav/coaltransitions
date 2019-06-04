import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { mixins } from '../../token';

export default css`
  ul {
    ${mixins.resetList()}

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
