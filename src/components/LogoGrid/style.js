import css from 'styled-jsx/css';

import { mq } from '../../token';

export default css`
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    list-style: none;
    margin-bottom: 2rem;
    margin-top: 2rem;
    padding-left: 0;
  }

  @media ${mq.phone} {
    ul {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media ${mq.tablet} {
    ul {
      grid-template-columns: repeat(4, 1fr);
      margin-bottom: 4rem;
      margin-top: 4rem;
    }
  }

  a {
    display: block;
  }

  a:hover > *,
  a:focus > * {
    opacity: 0.8;
  }
`;
