import css from 'styled-jsx/css';

import { mixins } from '../../token';

export default css`
  ul {
    ${mixins.resetList()}
  }
`;
