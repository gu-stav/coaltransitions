import css from 'styled-jsx/css';

import { mixins, colors } from '../../token';

export default css`
  ul {
    ${mixins.resetList()}

    margin-left: calc(-15% - 3.5rem);
  }

  li {
    border-bottom: 1px solid ${colors.blueAction};
  }
`;
