import css from 'styled-jsx/css';

import { mq } from '../../token';

export default css`
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
