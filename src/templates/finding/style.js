import css from 'styled-jsx/css';

import { colors, mixins, mq } from '../../token';

export default css`
  .header {
    margin-bottom: 4.5rem;
  }

  .title {
    ${mixins.text('huge')}

    align-self: flex-end;
    background-color: ${colors.blueBrand};
    color: white;
    margin-bottom: -2.5rem;
    margin-left: auto;
    margin-top: 0;
    padding: 1.5rem 15rem 1.5rem 2.5rem;
    position: relative;
    width: 75%;
    z-index: 10;
  }

  @media ${mq.tablet} {
    .title {
      ${mixins.text('huge', 'tablet')}
    }
  }

  @media ${mq.desktop} {
    .title {
      ${mixins.text('huge', 'desktop')}
    }
  }

  .body {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media ${mq.tablet} {
    .body {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }

  @media ${mq.desktop} {
    .body {
      padding-left: 0;
      padding-right: 0;
    }
  }

  .description {
    margin-bottom: 3rem;
  }

  @media ${mq.tablet} {
    .description {
      margin-bottom: 5rem;
    }
  }

  @media ${mq.desktop} {
    .description {
      margin-bottom: 6rem;
    }
  }

  .additional-links-container {
    margin-bottom: 2rem;
    width: 100%;
  }

  .section-headline {
    ${mixins.text('regular-big')};

    align-items: center;
    color: ${colors.blueBrand};
    display: flex;
    justify-content: space-between;
    margin-bottom: 0;
    text-transform: uppercase;
  }

  @media ${mq.tablet} {
    .section-headline {
      ${mixins.text('regular-big', 'tablet')};
    }
  }

  @media ${mq.desktop} {
    .section-headline {
      ${mixins.text('regular-big', 'desktop')};
    }
  }

  .publications-list-contaioner {
    margin-left: -1rem;
  }

  @media ${mq.desktop} {
    .publications-list-contaioner {
      margin-left: calc(-15% - 10.5rem);
    }
  }
`;
