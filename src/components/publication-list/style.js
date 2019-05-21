import css from 'styled-jsx/css';

import { colors, mixins, mq } from '../../token';

export default css`
  .publications-container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media ${mq.tablet} {
    .publications-container {
      padding-left: 0;
      padding-right: 0;
    }
  }

  .title {
    ${mixins.text('regular-big')};

    color: ${colors.blueBrand};
    text-transform: uppercase;
  }

  @media ${mq.tablet} {
    .title {
      margin-left: 14.5rem;
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
