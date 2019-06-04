import css from 'styled-jsx/css';

import { mixins, colors, mq } from '../../token';

export default css`
  ul {
    ${mixins.resetList()}

    width: 100%;
  }

  @media ${mq.tablet} {
    ul {
      margin-left: calc(-15% - 3.5rem);
    }
  }

  li {
    border-bottom: 1px solid ${colors.blueAction};
  }
`;
