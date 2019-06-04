import css from 'styled-jsx/css';

import { mixins, colors, mq } from '../../token';

export default css`
  section {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }

  @media ${mq.tablet} {
    section {
      margin-top: 4rem;
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

  .content-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
  }

  @media ${mq.tablet} {
    .content-container {
      flex-direction: row;
      margin-bottom: 3rem;
    }
  }

  .intro-container {
    justify-self: flex-end;
    margin-top: auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media ${mq.tablet} {
    .intro-container {
      flex: 1 0 auto;
      margin-left: 2rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      width: 50%;
    }
  }

  @media ${mq.desktop} {
    .intro-container {
      margin-left: 2.5rem;
      padding-left: 0rem;
      padding-right: 0rem;
    }
  }
`;
