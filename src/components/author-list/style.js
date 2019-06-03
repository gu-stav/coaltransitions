import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mixins, mq } from '../../token';

export default css`
  ul {
    ${mixins.resetList()}

    display: inline-block;
  }

  li {
    display: inline;
    position: relative;
  }

  li + li {
    padding-left: 0.8rem;
  }

  @media ${mq.tablet} {
    li + li {
      padding-left: 1.25rem;
    }
  }

  li + li:before {
    color: ${colors.blueBrand};
    content: '·';
    font-size: 1.5rem;
    font-weight: 700;
    left: -0.05rem;
    line-height: 0.5;
    margin-left: 0.25rem;
    margin-right: 0.35rem;
    position: absolute;
    top: 0.25rem;
  }

  @media ${mq.tablet} {
    li + li:before {
      font-size: 2.3rem;
      margin-left: 0.35rem;
      top: 0;
    }
  }
`;

export const linkStyle = css.resolve`
  a {
    ${mixins.text('small')}
  }

  @media ${mq.tablet} {
    a {
      ${mixins.text('small', 'tablet')}
    }
  }

  @media ${mq.desktop} {
    a {
      ${mixins.text('small', 'desktop')}
    }
  }

  a:hover,
  a:focus {
    color: ${colors.blueAction};
  }
`;
