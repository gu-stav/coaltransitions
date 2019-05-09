import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mixins } from '../../token';

export default css`
  ul {
    ${mixins.resetList()}

    display: inline-block;
  }

  li {
    display: inline;
  }

  li + li:before {
    color: ${colors.blueBrand};
    content: '·';
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1;
    margin-left: 0.35rem;
    margin-right: 0.35rem;
  }
`;

export const linkStyle = css.resolve`
  a {
    ${mixins.text('small')}
  }

  a:hover,
  a:focus {
    color: ${colors.blueAction};
  }
`;
