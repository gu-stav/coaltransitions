import css from 'styled-jsx/css';

import { mixins, colors, mq } from '../../token';

export default css`
  article {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
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
