import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mixins, mq, fonts } from '../../../token';

export default css`
  .burger {
    background: transparent;
    border: 0;
    color: ${colors.blueAction};
    outline: none;
    margin-right: 0.25rem;
    padding: 0;
    position: relative;
  }

  .burger--is-close {
    color: white;
  }

  .burger:hover,
  .burger:focus {
    color: ${colors.greenAction};
    cursor: pointer;
  }

  @media ${mq.tablet} {
    .burger {
      display: none;
    }
  }

  .burger-label {
    font-family: ${fonts.publicSans.family};
    font-size: 0.67rem;
    font-weight: 400;
    line-height: 1;
    left: calc(100% + 0.15rem);
    position: absolute;
    text-transform: uppercase;
    top: 0.25rem;
    transform: rotate(-90deg) translateX(-100%);
    transform-origin: top left;
  }

  .burger--is-close .burger-label {
    display: none;
  }

  .modal-menu {
    ${mixins.resetList()}
  }

  li + li {
    border-top: 1px solid ${colors.blueActionActive};
  }

  .modal-header {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1.5rem;
  }

  .social-media-container {
    display: flex;
    flex-direction: column;
    margin-top: 2.5rem;
  }

  .social-media-container__label {
    ${mixins.text('small')}

    margin-bottom: 0;
    margin-top: 0;
    text-align: center;
    text-transform: uppercase;
  }

  .social-media-container__inner {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }

  .social-media__item + .social-media__item {
    margin-left: 1.5rem;
  }
`;

export const barsIcon = css.resolve`
  height: 2.5rem;
  width: 2.5rem;
`;

export const socialMediaIcon = css.resolve`
  height: 2.25rem;
  width: 2.25rem;
`;

export const itemFirstLevel = css.resolve`
  a {
    ${mixins.text('huge')}

    display: block;
    padding: 1.25rem 0;
    text-align: center;
    text-decoration: none;
  }

  a:hover,
  a:focus {
    text-decoration: underline;
  }
`;

export const modalStyle = {
  content: {
    backgroundColor: colors.blueBrand,
    border: 0,
    borderRadius: 0,
    bottom: '0',
    color: 'white',
    left: '0',
    padding: '1.5rem',
    right: '0',
    top: '0',
  },
};
