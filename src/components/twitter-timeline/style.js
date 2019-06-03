import css from 'styled-jsx/css';

import { mixins, colors, mq } from '../../token';

export default css`
  section {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media ${mq.tablet} {
    section {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }

  @media ${mq.desktop} {
    section {
      padding-left: 0;
      padding-right: 0;
    }
  }

  ul {
    ${mixins.resetList()}

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 2.5rem;
  }

  @media ${mq.tablet} {
    ul {
      flex-direction: row;
    }
  }

  li {
    flex: 0 0 100%;
  }

  @media ${mq.tablet} {
    li {
      flex-basis: 35%;
    }
  }

  @media ${mq.desktop} {
    li {
      flex-basis: 33.33%;
    }
  }

  .title {
    ${mixins.text('extra-big')}

    align-items: center;
    color: ${colors.blueBrand};
    display: flex;
    flex-direction: row;
    position: relative;
  }

  @media ${mq.tablet} {
    .title {
      ${mixins.text('extra-big', 'tablet')}
    }
  }

  @media ${mq.desktop} {
    .title {
      ${mixins.text('extra-big', 'desktop')}
    }
  }

  hr {
    background-color: ${colors.blueAction};
    border: none;
    flex: 1 0 auto;
    height: 1px;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  @media ${mq.tablet} {
    hr {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }

  @media ${mq.desktop} {
    hr {
      margin-left: 1.5rem;
      margin-right: 1.5rem;
    }
  }
`;
