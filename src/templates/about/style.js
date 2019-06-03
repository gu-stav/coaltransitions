import css from 'styled-jsx/css';

import { mixins, colors, mq } from '../../token';

export default css`
  article {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media ${mq.tablet} {
    article {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }

  h1 {
    ${mixins.text('huge')}

    color: ${colors.blueBrand};
    margin-bottom: 1rem;
    margin-top: 0;
  }

  @media ${mq.tablet} {
    h1 {
      ${mixins.text('huge', 'tablet')}

      margin-bottom: 2rem;
    }
  }

  @media ${mq.desktop} {
    h1 {
      ${mixins.text('huge', 'desktop')}

      margin-bottom: 3rem;
    }
  }
`;
