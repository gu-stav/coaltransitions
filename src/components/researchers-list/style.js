import css from 'styled-jsx/css';

import { mixins, mq, colors } from '../../token';

export default css`
  ul {
    ${mixins.resetList()}

    margin-left: calc(-17.5% - 3.5rem);
  }

  li {
    border-bottom: 1px solid ${colors.blueAction};
    padding-bottom: 1.5rem;
    padding-top: 1.5rem;
  }

  h2 {
    ${mixins.text('regular-big')};

    color: ${colors.blueAction};
    margin-bottom: 0.5rem;
    margin-top: 0;
    text-transform: uppercase;
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
