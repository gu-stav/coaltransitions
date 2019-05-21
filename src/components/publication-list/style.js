import css from 'styled-jsx/css';

import { colors, mixins } from '../../token';

export default css`
  .title {
    ${mixins.text('regular-big')};

    color: ${colors.blueBrand};
    margin-left: 14.5rem;
    text-transform: uppercase;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;

    padding-left: 0;
  }

  li + li {
    border-top: 1px solid ${colors.blueBrand};
  }
`;
