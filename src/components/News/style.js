import css from 'styled-jsx/css';

import { colors, mixins, mq } from '../../token';

export default css`
  article {
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
  }

  @media ${mq.tablet} {
    article {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }

  .date {
    ${mixins.text('small')}

    background-color: ${colors.greenBrand};
    color: white;
    font-weight: 700;
    padding: 0.25rem;
  }

  @media ${mq.tablet} {
    .date {
      ${mixins.text('medium')}

      font-weight: 700;
    }
  }

  .title-text {
    ${mixins.text('huge')}

    display: block;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  }

  @media ${mq.tablet} {
    .title-text {
      ${mixins.text('huge', 'tablet')}

      margin-bottom: 2rem;
      margin-top: 1rem;
    }
  }

  @media ${mq.desktop} {
    .title-text {
      ${mixins.text('huge', 'desktop')}

      margin-bottom: 3rem;
    }
  }
`;
