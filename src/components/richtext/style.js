import css from 'styled-jsx/css';

import { mixins, mq } from '../../token';

export default css`
  :global(.richtext) {
    ${mixins.text('regular')}
  }

  @media ${mq.tablet} {
    :global(.richtext) {
      ${mixins.text('regular', 'tablet')}
    }
  }

  @media ${mq.desktop} {
    :global(.richtext) {
      ${mixins.text('regular', 'desktop')}
    }
  }

  :global(.richtext > *:first-child) {
    margin-top: 0;
  }

  :global(.richtext > *:last-child) {
    margin-bottom: 0;
  }

  :global(.richtext ul) {
    padding-left: 1rem;
  }
`;
