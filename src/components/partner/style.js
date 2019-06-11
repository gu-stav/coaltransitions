import css from 'styled-jsx/css';

import { mixins, mq } from '../../token';

export default css`
  .partner {
    display: flex;
    flex-direction: column;
    padding-bottom: 1.5rem;
    padding-top: 1.5rem;
  }

  @media ${mq.tablet} {
    .partner {
      flex-direction: row;
    }
  }

  .image-container {
    display: block;
    flex: 1 0 auto;
    width: 35%;
  }

  @media ${mq.tablet} {
    .image-container {
      margin-right: 1.5rem;
      width: 12rem;
    }
  }

  @media ${mq.desktop} {
    .image-container {
      margin-left: -13.5rem;
    }
  }

  .title {
    ${mixins.text('regular-big')}

    margin-bottom: 1rem;
    margin-top: 0;
  }

  @media ${mq.tablet} {
    .title {
      ${mixins.text('regular-big', 'tablet')}
    }
  }

  @media ${mq.desktop} {
    .title {
      ${mixins.text('regular-big', 'desktop')}
    }
  }
`;
