import css from 'styled-jsx/css';

import { colors, mixins, mq } from '../../token';

export default css`
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 1.5rem;
    width: 100%;
  }

  .title {
    ${mixins.text('extra-big')}

    align-items: center;
    color: ${colors.blueBrand};
    display: flex;
    flex-direction: row;
    margin-bottom: 3rem;
    margin-top: 3rem;
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

      margin-bottom: 5rem;
      margin-top: 5rem;
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

  ul {
    ${mixins.resetList()}
  }

  li + li {
    margin-top: 2rem;
  }

  @media ${mq.tablet} {
    li + li {
      margin-top: 3.5rem;
    }
  }

  @media ${mq.desktop} {
    li + li {
      margin-top: 4rem;
    }
  }
`;
