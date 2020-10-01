import css from 'styled-jsx/css';

import { mixins, mq } from '../../token';

export default css`
  .container {
    padding-top: 1.5rem;
    width: 100%;
  }

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
`;
