import css from 'styled-jsx/css';

import { mq } from '../../token';

export default css`
  .filter {
    margin-bottom: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media ${mq.tablet} {
    .filter {
      margin-bottom: 3rem;
    }
  }

  @media ${mq.desktop} {
    .filter {
      margin-bottom: 4rem;
      padding-left: 0;
      padding-right: 0;
    }
  }

  .row {
    display: flex;
    flex-direction: column;
  }

  @media ${mq.tablet} {
    .row {
      flex-direction: row;
    }
  }

  .row + .row {
    margin-top: 1.5rem;
  }

  /* Reset button */
  .row:nth-child(2) .column:last-child {
    flex: 0 1 auto;
    margin-top: 2.5rem;
  }

  @media ${mq.tablet} {
    .row:nth-child(2) .column:last-child {
      margin-top: 0;
      padding-left: 3.5rem;
    }
  }

  .column {
    flex: 1 0 50%;
  }

  .column + .column {
    margin-top: 1.5rem;
  }

  @media ${mq.tablet} {
    .column + .column {
      margin-top: 0;
      padding-left: 1.5rem;
    }
  }
`;
