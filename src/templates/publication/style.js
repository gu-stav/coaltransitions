import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mixins, mq } from '../../token';

export default css`
  .publication {
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media ${mq.tablet} {
    .publication {
      flex-direction: row;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }

  .header {
    display: flex;
    flex-direction: column;
    padding-left: 2.5rem;
  }

  .cover-image {
    display: flex;
  }

  .cover-image img {
    justify-self: flex-end;
    margin-left: auto;
    max-width: 50%;
  }

  .title {
    ${mixins.text('extra-big')}

    margin-bottom: 0;
    margin-top: 0;
    text-align: right;
  }

  @media ${mq.tablet} {
    .title {
      ${mixins.text('extra-big', 'tablet')}
    }
  }

  @media ${mq.desktop} {
    .title {
      ${mixins.text('extra-big', 'desktop')}
    }
  }

  .year-text {
    ${mixins.text('medium')}

    background-color: ${colors.greenBrand};
    color: white;
    display: inline-block;
    margin-bottom: 2.5rem;
    margin-top: 2.5rem;
    padding: 0 0.5rem;
  }

  @media ${mq.tablet} {
    .year-text {
      ${mixins.text('medium', 'tablet')}

      padding-left: 0.75rem;
      padding-right: 0.75rem;
    }
  }

  @media ${mq.desktop} {
    .year-text {
      ${mixins.text('medium', 'desktop')}

      padding-bottom: 0.2rem;
      padding-top: 0.2rem;
    }
  }

  .subtitle {
    ${mixins.text('medium')}

    display: block;
    font-weight: 400;
    text-align: right;
  }

  @media ${mq.tablet} {
    .subtitle {
      ${mixins.text('medium', 'tablet')}

      font-weight: 400;
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
    justify-content: flex-end;
    margin-bottom: 4rem;
    margin-top: 2rem;
  }

  .header {
    flex: 0 0 45%;
  }

  .body {
    flex: 1 0 35%;
  }

  .meta {
    flex: 0 0 20%;
  }

  @media ${mq.tablet} {
    .body,
    .meta {
      padding-left: 2rem;
    }
  }

  @media ${mq.tablet} {
    .meta {
      align-self: flex-start;
      margin-top: 25%;
      position: sticky;
      top: 1rem;
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
    margin-top: 0.5rem;
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
