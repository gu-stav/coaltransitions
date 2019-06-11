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

    color: ${colors.blueBrand};
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
