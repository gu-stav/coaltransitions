import css from 'styled-jsx/css';

import { mixins, mq, colors } from '../../token';

export default css`
  ul {
    ${mixins.resetList()}

    width: 100%;
  }

  li {
    border-bottom: 1px solid ${colors.blueAction};
    padding-bottom: 2rem;
    padding-top: 2rem;
    width: 100%;
  }

  h2 {
    ${mixins.text('regular-big')};

    color: ${colors.blueAction};
    margin-bottom: 0.5rem;
    margin-top: 0;
    text-transform: uppercase;
  }

  @media ${mq.tablet} {
    h2 {
      margin-left: calc(25% + 1.5rem);
    }
  }

  ul + h2 {
    margin-top: 4.5rem;
  }

  @media ${mq.tablet} {
    h2 {
      ${mixins.text('regular-big', 'tablet')};
    }
  }

  @media ${mq.desktop} {
    h2 {
      ${mixins.text('regular-big', 'desktop')};
    }
  }
`;
