import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mixins, mq } from '../../../token';

export default css`
  .argument {
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    padding-bottom: 4rem;
    position: relative;
  }

  @media ${mq.tablet} {
    .argument {
      padding-bottom: 6rem;
    }
  }

  .image-container {
    display: flex;
    flex: 0 0 auto;
    flex-direction: row;
    margin: 0;
    width: 95%;
  }

  @media ${mq.tablet} {
    .image-container {
      width: 75%;
    }
  }

  @media ${mq.desktop} {
    .image-container {
      width: 50%;
    }
  }

  .caption {
    align-self: flex-end;
    padding: 1.5rem;
    transform: translateY(-4rem);
  }

  .intro-container {
    align-self: flex-end;
    background-color: ${colors.blueAction};
    color: white;
    flex: 1 0 auto;
    margin-left: auto;
    padding: 1.5rem;
    position: relative;
    transform: translateY(-10%);
    width: 95%;
  }

  @media ${mq.tablet} {
    .intro-container {
      padding: 2rem;
      transform: translateY(-25%);
      width: 60%;
    }
  }

  @media ${mq.desktop} {
    .intro-container {
      transform: translateY(-45%);
      width: 55%;
    }
  }

  .argument--has-theme-green .intro-container {
    background-color: ${colors.greenBrand};
  }

  .index {
    ${mixins.text('medium')}

    background-color: ${colors.greenBrand};
    left: 0;
    padding: 0.1rem 0.75rem;
    position: absolute;
    top: 0;
    transform: translateY(-100%);
  }

  @media ${mq.tablet} {
    .index {
      ${mixins.text('medium', 'tablet')}

      padding: 0.15rem 1rem;
    }
  }

  @media ${mq.desktop} {
    .index {
      ${mixins.text('medium', 'desktop')}

      padding: 0.25rem 1.5rem;
    }
  }

  .argument--has-theme-green .index {
    background-color: ${colors.blueBrand};
  }

  .title {
    margin-bottom: 1rem;
    margin-top: 0;
  }

  @media ${mq.tablet} {
    .title {
      margin-bottom: 2.5rem;
    }
  }

  .intro {
    ${mixins.text('medium')}

    font-weight: 400;
    margin-bottom: 1.5rem;
  }

  @media ${mq.tablet} {
    .intro {
      ${mixins.text('medium', 'tablet')}

      font-weight: 400;
      margin-bottom: 2.5rem;
    }
  }

  @media ${mq.desktop} {
    .intro {
      ${mixins.text('medium', 'desktop')}

      font-weight: 400;
    }
  }

  .background-strokes-container {
    bottom: 0;
    position: absolute;
    width: 100%;
    z-index: -1;
  }
`;

export const titleLink = css.resolve`
  a {
    ${mixins.text('huge')}

    text-decoration: none;
  }

  @media ${mq.tablet} {
    a {
      ${mixins.text('huge', 'tablet')}
    }
  }

  @media ${mq.desktop} {
    a {
      ${mixins.text('huge', 'desktop')}
    }
  }
`;

export const imageLink = css.resolve`
  a {
    flex: 1 0 100%;
  }
`;

export const arrowIcon = css.resolve`
  svg {
    height: 1.75rem;
    margin-left: 1rem;
    width: 1.75rem;
  }
`;
