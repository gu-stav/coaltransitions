import css from 'styled-jsx/css';

import { mixins, colors } from '../../token';

export default css`
  label {
    ${mixins.text('small')}

    background-color: ${colors.blueBrand};
    color: white;
    padding: 0.25rem 0.5rem;
  }
`;
