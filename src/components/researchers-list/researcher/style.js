import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { mixins, mq } from '../../../token';

export default css`
  .researcher {
    display: flex;
    flex-direction: row;
  }

  .image-container {
    overflow: hidden;
    width: 20%;
  }

  .content-container {
    padding-left: 1.5rem;
    width: 80%;
  }

  dt,
  dd,
  .title {
    ${mixins.text('regular')}
  }

  .title {
    margin-bottom: 0;
    margin-top: 0;
    font-weight: 700;
  }

  @media ${mq.tablet} {
    dt,
    dd,
    .title {
      ${mixins.text('regular', 'tablet')}
    }

    .title {
      font-weight: 700;
    }
  }

  @media ${mq.desktop} {
    dt,
    dd,
    .title {
      ${mixins.text('regular', 'desktop')}
    }

    .title {
      font-weight: 700;
    }
  }

  dl {
    display: flex;
    flex-wrap: wrap;
  }

  dt {
    display: inline-flex;
  }

  dd {
    flex: 1 0 auto;
    margin-left: 0.25rem;
    width: 80%;
  }

  dd > p {
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const portrait = css.resolve`
  img {
    border-radius: 50%;
  }
`;
