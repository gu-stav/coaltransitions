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

  .title {
    ${mixins.text('medium')}

    margin-bottom: 1rem;
    margin-top: 0.25rem;
    font-weight: 700;
  }

  @media ${mq.tablet} {
    .title {
      ${mixins.text('medium', 'tablet')}

      font-weight: 700;
    }
  }

  @media ${mq.desktop} {
    .title {
      ${mixins.text('medium', 'desktop')}

      font-weight: 700;
      margin-bottom: 1rem;
    }
  }

  p {
    ${mixins.text('regular')}

    margin-bottom: 0.5rem;
    margin-top: 0;
  }

  @media ${mq.tablet} {
    p {
      ${mixins.text('regular', 'tablet')}
    }
  }

  @media ${mq.desktop} {
    p {
      ${mixins.text('regular', 'dekstop')}
    }
  }
`;

export const portrait = css.resolve`
  img {
    border-radius: 50%;
  }
`;
