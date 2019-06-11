import css from 'styled-jsx/css';

import { mixins, mq } from '../../../token';

export default css`
  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 15.5rem;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }

  @media ${mq.desktop} {
    div {
      height: 9.75rem;
    }
  }

  p {
    ${mixins.text('small')}

    text-align: center;
  }

  @media ${mq.tablet} {
    ${mixins.text('small', 'tablet')}
  }

  @media ${mq.desktop} {
    ${mixins.text('small', 'desktop')}
  }
`;
