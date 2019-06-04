import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { mixins, colors, mq } from '../../../token';

export default css`
  .project {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding-bottom: 1.5rem;
    padding-top: 1.5rem;
    width: 100%;
  }

  @media ${mq.tablet} {
    .project {
      flex-direction: row;
      padding-bottom: 2.5rem;
      padding-top: 2.5rem;
    }
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
    margin-bottom: 0;
    margin-top: 0;
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

      padding-bottom: 0.2rem;
      padding-top: 0.2rem;
    }
  }

  .title-container {
    flex: 1 1 auto;
    margin-bottom: 0;
    margin-top: 0.5rem;
  }

  @media ${mq.tablet} {
    .title-container {
      margin-left: 1.5rem;
      margin-top: 0;
      width: 80%;
    }
  }

  @media ${mq.desktop} {
    .title-container {
      margin-left: 2rem;
    }
  }

  .title {
    ${mixins.text('medium')}

    text-decoration: none;
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

  .title:hover,
  .title:focus {
    color: ${colors.blueAction};
    text-decoration: underline;
  }

  .content-container {
    width: 100%;
  }

  @media ${mq.tablet} {
    .content-container {
      margin-left: calc(15% + 2rem);
    }
  }

  .summary {
    ${mixins.text('small')}

    margin-bottom: 2.5rem;
  }

  @media ${mq.tablet} {
    .summary {
      ${mixins.text('small', 'tablet')}
    }
  }

  @media ${mq.desktop} {
    .summary {
      ${mixins.text('small', 'desktop')}
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
