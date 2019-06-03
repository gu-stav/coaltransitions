import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mixins, mq } from '../../../token';

export default css`
  .publication {
    display: flex;
    flex-direction: row;
    padding-bottom: 1rem;
    padding-top: 1rem;
    position: relative;
  }

  @media ${mq.tablet} {
    .publication {
      padding-bottom: 1.5rem;
      padding-top: 1.5rem;
    }
  }

  .title {
    margin-bottom: 1rem;
    margin-top: 0;
  }

  @media ${mq.tablet} {
    .title {
      margin-bottom: 1.5rem;
    }
  }

  .year {
    ${mixins.text('small', 'phone')}

    align-self: flex-start;
    background-color: ${colors.greenBrand};
    color: white;
    display: inline-block;
    font-weight: 700;
    margin-bottom: 0;
    margin-top: 0;
    padding: 0.15rem 0.5rem;
    text-align: right;
    width: 100%;
  }

  @media ${mq.tablet} {
    .year {
      ${mixins.text('small', 'tablet')}

      font-weight: 700;
      position: absolute;
      text-align: left;
      transform: translateX(-100%);
      width: auto;
    }
  }

  .cover-image-container {
    align-self: flex-start;
    background-color: ${colors.greyLight};
    border: 1px solid ${colors.greyLight};
    font-size: 0;
    flex: 0 0 auto;
    margin-right: 1rem;
    position: relative;
    width: 25%;
  }

  @media ${mq.tablet} {
    .cover-image-container {
      margin-right: 1.5rem;
      min-height: 9rem;
      width: 20%;
    }
  }

  @media ${mq.desktop} {
    .cover-image-container {
      width: 15%;
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
    margin-bottom: 1rem;
  }

  @media ${mq.tabket} {
    .author-container {
      margin-bottom: 1.5rem;
    }
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

  @media ${mq.desktop} {
    a {
      ${mixins.text('regular-big', 'desktop')};
    }
  }

  a:hover,
  a:focus {
    color: ${colors.blueAction};
    text-decoration: underline;
  }
`;

export const linkPicture = css.resolve`
  a {
    font-size: 0;
    line-height: 1;
  }
`;
