import css from 'styled-jsx/css';

import { mixins } from '../../token';

export default css`
  .publication-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .content-container {
    width: 75%;
  }

  .meta-container {
    width: 25%;
  }

  .title {
    ${mixins.textBig};
  }

  .year,
  .subtitle {
    ${mixins.textRegular};
    display: block;
  }

  .abstract {
    ${mixins.textRegular};
  }
`;
