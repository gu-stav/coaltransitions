import css from 'styled-jsx/css';

import { mixins } from '../../token';

export default css`
  .title {
    ${mixins.textBig};
  }

  .abstract {
    ${mixins.textRegular};
  }
`;
