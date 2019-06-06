import css from 'styled-jsx/css';

import { mixins, colors, mq } from '../../token';

export default css`
  ul {
    ${mixins.resetList()}

    width: 100%;
  }

  @media ${mq.tablet} {
    ul {
      margin-left: calc(-12% - 2rem);
    }
  }

  li {
    border-bottom: 1px solid ${colors.blueAction};
  }
`;
