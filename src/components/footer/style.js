import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mixins } from '../../token';

export default css`
  footer {
    margin-bottom: 4rem;
    margin-top: 4rem;
    padding-top: 8rem;
  }

  ul {
    ${mixins.resetList()}

    display: flex;
  }

  li + li {
    margin-left: 1.5rem;
  }
`;

export const item = css.resolve`
  a {
    ${mixins.text('regular-big')}

    color: ${colors.blueBrand};
    text-decoration: none;
    text-transform: uppercase;
  }
`;
