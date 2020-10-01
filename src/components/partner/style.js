import css from 'styled-jsx/css';

import { mixins, mq, colors } from '../../token';

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
    flex: 0 0 auto;
    margin-bottom: 1rem;
    width: 35%;
  }

  @media ${mq.tablet} {
    .image-container {
      margin-bottom: 0;
      margin-right: 2rem;
      margin-top: 0.25rem;
      width: 11rem;
    }
  }

  @media ${mq.desktop} {
    .image-container {
      margin-left: -13rem;
    }
  }

  .title {
    ${mixins.text('medium')}

    margin-bottom: 1rem;
    margin-top: 0;
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

  .title-link:hover,
  .title-link:focus {
    color: ${colors.blueBrand};
  }
`;
