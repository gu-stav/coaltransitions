import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mixins, mq } from '../../token';

export default css`
  .publication {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media ${mq.tablet} {
    .publication {
      flex-direction: row;
      margin-top: 3rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }

  @media ${mq.desktop} {
    .publication {
      flex-wrap: nowrap;
    }
  }

  .header {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media ${mq.tablet} {
    .header {
      flex-direction: column;
      padding-left: 1.5rem;
    }
  }

  @media ${mq.desktop} {
    .header {
      padding-left: 2.5rem;
    }
  }

  .cover-image-container {
    flex: 0 1 auto;
    max-width: 35%;
    order: 2;
  }

  @media ${mq.tablet} {
    .cover-image-container {
      justify-self: flex-end;
      margin-left: auto;
      margin-right: 0;
      margin-top: 0;
      max-width: 50%;
      order: 3;
    }
  }

  .title {
    ${mixins.text('extra-big')}

    margin-bottom: 1.5rem;
    margin-top: 0;
    order: 1;
    width: 100%;
  }

  @media ${mq.tablet} {
    .title {
      ${mixins.text('extra-big', 'tablet')}

      margin-bottom: 1.5rem;
      order: 1;
      text-align: right;
    }
  }

  @media ${mq.desktop} {
    .title {
      ${mixins.text('extra-big', 'desktop')}
    }
  }

  .title-meta-container {
    order: 3;
    padding-left: 1.5rem;
    width: 40%;
  }

  @media ${mq.tablet} {
    .title-meta-container {
      order: 2;
      width: 100%;
    }
  }

  .year {
    display: flex;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  @media ${mq.tablet} {
    .year {
      justify-content: flex-end;
      margin-bottom: 2.5rem;
      margin-left: auto;
      margin-top: 2.5rem;
    }
  }

  .year-text {
    ${mixins.text('regular')}

    background-color: ${colors.greenBrand};
    color: white;
    display: inline-block;
    font-weight: 700;
    padding: 0 0.5rem;
  }

  @media ${mq.tablet} {
    .year-text {
      ${mixins.text('regular', 'tablet')}

      font-weight: 700;
      padding-left: 0.75rem;
      padding-right: 0.75rem;
    }
  }

  @media ${mq.desktop} {
    .year-text {
      ${mixins.text('regular', 'desktop')}

      font-weight: 700;
    }
  }

  .subtitle {
    ${mixins.text('small')}

    color: ${colors.blueBrand};
    display: block;
    font-weight: 400;
    margin-bottom: 0;
    margin-top: 0;
    order: 2;
  }

  @media ${mq.tablet} {
    .subtitle {
      ${mixins.text('medium', 'tablet')}

      font-weight: 400;
      text-align: right;
    }
  }

  @media ${mq.desktop} {
    .subtitle {
      ${mixins.text('medium', 'desktop')}

      font-weight: 400;
    }
  }

  .languages-container {
    display: flex;
  }

  @media ${mq.tablet} {
    .languages-container {
      justify-content: flex-end;
      margin-bottom: 4rem;
      margin-top: 2rem;
    }
  }

  .header {
    margin-bottom: 1.5rem;
  }

  @media ${mq.tablet} {
    .header {
      flex: 0 0 40%;
    }
  }

  .body {
    flex: 1 0 100%;
  }

  @media ${mq.tablet} {
    .body {
      flex-basis: 60%;
      padding-right: 1.5rem;
    }
  }

  @media ${mq.desktop} {
    .body {
      flex-basis: 40%;
      padding-right: 0;
    }
  }

  .meta {
    flex: 0 0 100%;

  }

  @media ${mq.tablet} {
    .meta {
      flex-basis: 40%;
      margin-left: 40%;
    }
  }

  @media ${mq.desktop} {
    .meta {
      flex-basis: 20%;
      margin-left: 0;
      padding-right: 0.5rem;
    }
  }

  @media ${mq.tablet} {
    .body,
    .meta {
      padding-left: 1.5rem;
    }
  }

  .meta {
    margin-top: 2.5rem;
  }

  @media ${mq.tablet} {
    .meta {
      align-self: flex-start;
    }
  }

  @media ${mq.desktop} {
    .meta {
      top: 1rem;
      margin-top: 25%;
      position: sticky;
    }
  }

  .meta-block + .meta-block {
    margin-top: 1.5rem;
  }

  .meta-block-title {
    ${mixins.text('mini')}

    background: ${colors.blueBrand};
    box-decoration-break: clone;
    color: white;
    display: inline;
    font-weight: 700;
    margin-bottom: 0.5rem;
    margin-top: 0;
    padding: 0.17rem 0.4rem;
  }

  @media ${mq.tablet} {
    .meta-block-title {
      ${mixins.text('mini', 'tablet')}

      font-weight: 700;
    }
  }

  .meta-block-title ~ * {
    margin-top: 0.25rem;
  }

  .meta-block-content {
    ${mixins.text('small')}

    margin-bottom: 0;
    margin-top: 0;
  }

  @media ${mq.tablet} {
    .meta-block-content {
      ${mixins.text('small', 'tablet')}
    }
  }

  @media ${mq.desktop} {
    .meta-block-content {
      ${mixins.text('small', 'desktop')}
    }
  }

  .meta-block-list {
    ${mixins.resetList()}
  }
`;

export const buttonIcon = css.resolve`
  svg {
    height: 1.15rem;
    margin-left: 1rem;
    width: 1.15rem;
  }
`;
