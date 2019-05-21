import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mixins, mq } from '../../../token';

export default css`
  .publication {
    display: flex;
    flex-direction: row;
    padding-bottom: 1.5rem;
    padding-top: 1.5rem;
    position: relative;
  }

  .title {
    margin-bottom: 1.5rem;
    margin-top: 2rem;
  }

  @media ${mq.tablet} {
    .title {
      margin-top: 0;
    }
  }

  .year {
    ${mixins.text('small', 'phone')}

    align-self: flex-start;
    background-color: ${colors.greenBrand};
    color: white;
    display: inline-block;
    font-weight: 700;
    left: calc(15% + 1rem);
    margin-bottom: 0;
    margin-top: 0;
    padding: 0.15rem 0.5rem;
    position: absolute;
  }

  @media ${mq.tablet} {
    .year {
      ${mixins.text('small', 'tablet')}

      font-weight: 700;
      position: static;
    }
  }

  .cover-image-container {
    align-self: flex-start;
    background-color: ${colors.greyLight};
    border: 1px solid ${colors.greyDark};
    flex: 0 0 auto;
    margin-right: 1rem;
    width: 15%;
  }

  @media ${mq.tablet} {
    .cover-image-container {
      margin-right: 1.5rem;
      min-height: 11rem;
    }
  }

  .cover-image img {
    max-width: 100%;
  }

  .content-container {
    display: flex;
    flex-direction: column;
  }

  .author-container {
    margin-bottom: 1.5rem;
  }

  .tags-container {
    justify-self: flex-end;
    margin-top: auto;
  }
`;

export const linkTitle = css.resolve`
  a {
    ${mixins.text('regular-big')};

    display: inline-block;
    text-decoration: none;
  }

  @media ${mq.tablet} {
    a {
      ${mixins.text('regular-big', 'tablet')};
    }
  }

  a:hover,
  a:focus {
    color: ${colors.blueAction};
    text-decoration: underline;
  }
`;
