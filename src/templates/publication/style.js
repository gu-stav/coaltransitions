import css from 'styled-jsx/css';

import { mixins } from '../../token';

export default css`
  .publication-container {
    display: flex;
    justify-content: center;
  }

  .title {
    ${mixins.textBig};
  }

  .subtitle {
    ${mixins.textRegular};
    display: block;
  }

  .abstract {
    ${mixins.textRegular};
  }
`;
