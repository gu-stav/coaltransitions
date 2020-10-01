import css from 'styled-jsx/css';

import { colors, mixins, mq } from '../../token';

export default css`
  figure {
    margin: 0;
  }

  img {
    height: auto;
    max-width: 100%;
  }

  figcaption {
    ${mixins.text('mini')}

    color: ${colors.blueBrand};
    margin: 0.5rem 1rem;
  }

  @media ${mq.tablet} {
    figcaption {
      ${mixins.text('mini', 'tablet')}

      margin-left: 1.5rem;
      margin-right: 1.5rem;
    }
  }

  @media ${mq.desktop} {
    figcaption {
      ${mixins.text('mini', 'desktop')}

      margin-left: 0;
      margin-right: 0;
    }
  }

  :global(figcaption > *:first-child) {
    margin-top: 0;
  }

  :global(figcaption > *:last-child) {
    margin-bottom: 0;
  }
`;
