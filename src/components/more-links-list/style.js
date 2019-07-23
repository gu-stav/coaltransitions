import css from 'styled-jsx/css';

import { colors, mixins, mq } from '../../token';

export default css`
  ul {
    ${mixins.resetList()}

    margin-top: 1.5rem;
  }

  @media ${mq.tablet} {
    ul {
      margin-top: 2rem;
    }
  }

  @media ${mq.desktop} {
    ul {
      margin-top: 2.5rem;
    }
  }

  li {
    position: relative;
  }

  li:before {
    color: ${colors.blueBrand};
    content: '·';
    font-size: 1.75rem;
    left: -0.65rem;
    line-height: 1;
    position: absolute;
    top: -0.1rem;
    vertical-align: middle;
  }

  li + li {
    margin-top: 1rem;
  }

  @media ${mq.tablet} {
    li + li {
      margin-top: 1.5rem;
    }
  }

  .link {
    ${mixins.text('small')}

    font-weight: 400;
    text-decoration: none;
  }

  @media ${mq.tablet} {
    .link {
      ${mixins.text('small', 'tablet')}
    }
  }

  @media ${mq.desktop} {
    .link {
      ${mixins.text('small', 'desktop')}
    }
  }

  .link:hover,
  .link:focus {
    text-decoration: underline;
  }
`;
