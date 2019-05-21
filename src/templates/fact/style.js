import css from 'styled-jsx/css';

import { colors, mixins, mq } from '../../token';

export default css`
  .header {
    margin-bottom: 4.5rem;
  }

  .title {
    ${mixins.text('extra-big')}

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

  .intro {
    ${mixins.text('medium')}

    color: ${colors.blueBrand};
    font-weight: 400;
    margin-top: 0;
  }

  .body {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media ${mq.tablet} {
    .body {
      padding-left: 15%;
      padding-right: 10%;
    }
  }

  @media ${mq.desktop} {
    .body {
      padding-left: 25%;
      padding-right: 15%;
    }
  }

  .section-headline {
    ${mixins.text()}

    color: ${colors.blueBrand};
    font-weight: 700;
    margin-bottom: 1.5rem;
    margin-top: 4.5rem;
    text-transform: uppercase;
  }
`;
