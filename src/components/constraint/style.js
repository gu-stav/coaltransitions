import css from 'styled-jsx/css';

import { mq } from '../../token';

export default css`
  .constraint {
    max-width: 900px;
    width: 100%;
  }

  @media ${mq.desktop} {
    .constraint--toplevel {
      padding-left: 15%;
    }
  }

  .constraint--wide {
    max-width: 1280px;
  }
`;
