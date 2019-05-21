import css from 'styled-jsx/css';

import { mixins } from '../../token';

export default css`
  :global(.richtext) {
    ${mixins.text()}
  }

  :global(.richtext > *:first-child) {
    margin-top: 0;
  }

  :global(.richtext > *:last-child) {
    margin-bottom: 0;
  }
`;
