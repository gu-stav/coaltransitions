import css from 'styled-jsx/css';

import { mixins, colors } from '../../../token';

export default css`
  .tweet {
    padding: 0.5rem;
  }

  .date {
    ${mixins.text('small')}

    background-color: ${colors.blueAction};
    color: white;
    display: inline-block;
    font-weight: 700;
    padding: 0.15rem 0.5rem;
  }

  .text {
    ${mixins.text('regular')}

    margin-bottom: 0;
  }
`;
