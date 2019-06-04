import css from 'styled-jsx/css';

import { mq } from '../../token';

export default css`
  .constraint {
    max-width: 50rem;
    width: 100%;
  }

  @media ${mq.tablet} {
    .constraint {
      max-width: 50rem;
    }
  }

  @media ${mq.tablet} {
    .constraint--toplevel {
      padding-left: 10%;
    }
  }

  @media ${mq.desktop} {
    .constraint--toplevel {
      margin-left: 20%;
    }
  }

  @media ${mq.tablet} {
    .constraint--wide {
      max-width: 57rem;
    }
  }

  @media ${mq.desktop} {
    .constraint--wide {
      max-width: 62rem;
    }
  }
`;
