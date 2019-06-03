import css from 'styled-jsx/css';

import { mixins, mq, colors } from '../../token';

export default css`
  ul {
    ${mixins.resetList()}

    margin-left: calc(-20% - 3.5rem);
  }

  li {
    border-bottom: 1px solid ${colors.blueAction};
    padding-bottom: 1.5rem;
    padding-top: 1.5rem;
  }

  h2 {
    ${mixins.text('regular-big')};

    color: ${colors.blueAction};
    text-transform: uppercase;
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
