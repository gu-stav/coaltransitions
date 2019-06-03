import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { mixins, colors, mq } from '../../../token';

export default css`
  .project {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 2.5rem;
    padding-top: 2.5rem;
  }

  .duration-container {
    align-self: flex-start;
    margin-top: 0.25rem;
    width: 15%;
  }

  .duration {
    ${mixins.text('small', 'phone')}


    background-color: ${colors.greenBrand};
    color: white;
    display: inline-block;
    padding: 0.15rem 0.5rem;
    white-space: nowrap;
  }

  @media ${mq.tablet} {
    .duration {
      ${mixins.text('small', 'tablet')}
    }
  }

  @media ${mq.desktop} {
    .duration {
      ${mixins.text('small', 'desktop')}
    }
  }

  .title-container {
    margin-bottom: 0;
    margin-left: 2rem;
    margin-top: 0;
    width: 80%;
  }

  .title {
    ${mixins.text('medium')}
  }

  @media ${mq.tablet} {
    .title {
      ${mixins.text('medium', 'tablet')}
    }
  }

  @media ${mq.desktop} {
    .title {
      ${mixins.text('medium', 'desktop')}
    }
  }

  .content-container {
    margin-left: calc(15% + 2rem);
    width: 100%;
  }

  .summary {
    ${mixins.text('regular')}

    margin-bottom: 2.5rem;
  }

  @media ${mq.tablet} {
    .summary {
      ${mixins.text('regular', 'tablet')}
    }
  }

  @media ${mq.desktop} {
    .summary {
      ${mixins.text('regular', 'desktop')}
    }
  }
`;

export const buttonIcon = css.resolve`
  svg {
    height: 1.25rem;
    margin-left: 1.5rem;
    width: 1.25rem;
  }
`;
