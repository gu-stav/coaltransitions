import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mixins, mq } from '../../token';

export default css`
  .publication {
    display: flex;
    flex-direction: column;
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

  .header {
    display: flex;
    flex-direction: column;
  }

  @media ${mq.tablet} {
    .header {
      padding-left: 1.5rem;
    }
  }

  @media ${mq.desktop} {
    .header {
      padding-left: 2.5rem;
    }
  }

  .cover-image-container {
    justify-self: flex-end;
    margin-left: auto;
    max-width: 50%;
  }

  .title {
    ${mixins.text('extra-big')}

    margin-bottom: 1rem;
    margin-top: 0;
  }

  @media ${mq.tablet} {
    .title {
      ${mixins.text('extra-big', 'tablet')}

      margin-bottom: 1.5rem;
      text-align: right;
    }
  }

  @media ${mq.desktop} {
    .title {
      ${mixins.text('extra-big', 'desktop')}
    }
  }

  .year {
    align-self: flex-end;
    margin-bottom: 2.5rem;
    margin-left: auto;
    margin-top: 2.5rem;
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
    ${mixins.text('medium')}

    color: ${colors.blueBrand};
    display: block;
    font-weight: 400;
    margin-bottom: 0;
    margin-top: 0;
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
    flex: 0 0 40%;
  }

  .body {
    flex: 1 0 40%;
  }

  .meta {
    flex: 0 0 20%;
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
