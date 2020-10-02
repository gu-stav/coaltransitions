/* eslint-disable no-unused-vars */

import css from 'styled-jsx/css';
import React from 'react';

import { mixins, colors, mq } from '../../token';

export default css`
  .newsletter {
    align-items: flex-start;
    background-image: linear-gradient(to right, #3d5a9e, #8fae63);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 3rem -1rem;
    padding: 1.5rem 1rem;
  }

  @media ${mq.tablet} {
    .newsletter {
      flex-direction: row;
      margin: 4rem -1.5rem;
      padding: 1.5rem;
    }
  }

  @media ${mq.desktop} {
    .newsletter {
      margin: 8rem -2.5rem;
      padding: 2.5rem;
    }
  }

  .content-container {
    margin-bottom: 1.5rem;
  }

  @media ${mq.tablet} {
    .content-container {
      margin-bottom: 0;
      margin-right: 2.5rem;
    }
  }

  .title {
    ${mixins.text('big')};

    margin-bottom: 0;
    margin-top: 0;
  }

  @media ${mq.tablet} {
    .title {
      ${mixins.text('big', 'tablet')}
    }
  }

  @media ${mq.desktop} {
    .title {
      ${mixins.text('big', 'desktop')}
    }
  }

  .intro {
    ${mixins.text('regular')};

    margin-bottom: 0;
    margin-top: 0.5rem;
  }

  @media ${mq.tablet} {
    .intro {
      ${mixins.text('regular', 'tablet')}
    }
  }

  @media ${mq.desktop} {
    .intro {
      ${mixins.text('regular', 'desktop')}
    }
  }
`;

export const arrowIcon = css.resolve`
  svg {
    height: 1.75rem;
    margin-left: 1rem;
    width: 1.75rem;
  }
`;
