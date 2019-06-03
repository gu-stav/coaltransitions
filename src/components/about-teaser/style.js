import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { mixins, colors, mq } from '../../token';

export default css`
  section {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 4rem 1rem;
    position: relative;
    width: 100%;
  }

  @media ${mq.tablet} {
    section {
      padding: 8rem 0.5rem;
    }
  }

  @media ${mq.desktop} {
    section {
      padding: 10rem 0;
    }
  }

  .title {
    ${mixins.text('extra-big')}

    color: ${colors.blueBrand};
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
`;

export const stroke = css.resolve`
  svg {
    position: absolute;
    width: 100%;
    z-index: -1;
  }
`;

export const strokeTop = css.resolve`
  svg {
    top: 0;
  }
`;

export const strokeBottom = css.resolve`
  svg {
    bottom: 0;
  }
`;
