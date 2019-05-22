import css from 'styled-jsx/css';

import { mq } from '../../token';

export default css`
  .constraint {
    max-width: 1024px;
    width: 100%;
  }

  @media ${mq.desktop} {
    .constraint--toplevel {
      transform: translateX(5%);
    }
  }

  .constraint--wide {
    max-width: 1280px;
  }
`;
