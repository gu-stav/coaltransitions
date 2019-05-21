import css from 'styled-jsx/css';

import { mixins } from '../../token';

export default css`
  ul {
    ${mixins.resetList()}
  }

  .link {
    ${mixins.text('small')}

    font-weight: 700;
  }
`;
