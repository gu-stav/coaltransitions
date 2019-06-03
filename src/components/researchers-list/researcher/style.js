import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { mixins, mq } from '../../../token';

export default css`
  .researcher {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  @media ${mq.tablet} {
    .researcher {
      flex-direction: row;
    }
  }

  .image-container {
    width: 35%;
  }

  @media ${mq.tablet} {
    .image-container {
      width: 25%;
    }
  }

  .content-container {
    margin-top: 1.5rem;
  }

  @media ${mq.tablet} {
    .content-container {
      margin-top: 0;
      padding-left: 2rem;
      width: 80%;
    }
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

  dd {
    display: inline;
    margin-left: 0;
  }

  dd::after {
    display: block;
    content: '';
  }

  dt {
    display: inline-block;
    margin-right: 0.5rem;
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
