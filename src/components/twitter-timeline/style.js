import css from 'styled-jsx/css';

import { mixins } from '../../token';

export default css`
  ul {
    ${mixins.resetList()}

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 2.5rem;
  }

  li {
    flex: 0 0 33%;
  }
`;
