import css from 'styled-jsx/css';

import { mixins, mq } from '../../token';

export default css`
  ul {
    ${mixins.resetList()}
  }

  li + li {
    margin-top: 2rem;
  }

  @media ${mq.tablet} {
    li + li {
      margin-top: 3.5rem;
    }
  }

  @media ${mq.desktop} {
    li + li {
      margin-top: 4rem;
    }
  }

  .container {
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
  }

  @media ${mq.tablet} {
    .container {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }
`;
