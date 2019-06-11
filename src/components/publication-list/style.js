import css from 'styled-jsx/css';

import { colors, mixins, mq } from '../../token';

export default css`
  .publications-container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media ${mq.tablet} {
    .publications-container {
      padding-left: 5rem;
      padding-right: 0;
    }
  }

  @media ${mq.desktop} {
    .publications-container {
      padding-left: 7.5rem;
    }
  }

  .title {
    ${mixins.text('regular-big')};

    align-items: center;
    color: ${colors.blueBrand};
    display: flex;
    justify-content: space-between;
    margin-bottom: 0;
    margin-top: 2.5rem;
    text-transform: uppercase;
  }

  @media ${mq.tablet} {
    .title {
      ${mixins.text('regular-big', 'tablet')};

      margin-left: calc(20% + 1.5rem);
      margin-top: 2rem;
    }
  }

  @media ${mq.desktop} {
    .title {
      ${mixins.text('regular-big', 'desktop')};

      margin-left: calc(15% + 1.5rem);
      margin-top: 1.5rem;
    }
  }

  hr {
    background-color: ${colors.blueAction};
    border: none;
    flex: 1 0 auto;
    height: 1px;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    min-width: 3rem;
  }

  @media ${mq.tablet} {
    hr {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }

  @media ${mq.desktop} {
    hr {
      margin-left: 1.5rem;
      margin-right: 1.5rem;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;

    padding-left: 0;
  }

  li + li {
    border-top: 1px solid ${colors.blueBrand};
  }
`;
