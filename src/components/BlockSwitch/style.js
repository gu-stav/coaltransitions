import css from 'styled-jsx/css';

import { mq } from '../../token';

export default css`
  :global(.block-content > figure) {
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
  }

  @media ${mq.tablet} {
    :global(.block-content > figure) {
      margin-bottom: 3.5rem;
      margin-top: 3.5rem;
    }
  }

  .publications-list-contaioner {
    margin-left: -1rem;
  }

  @media ${mq.desktop} {
    .publications-list-contaioner {
      margin-left: calc(-15% - 10.5rem);
    }
  }
`;
