import css from 'styled-jsx/css';

import { mixins, mq, colors } from '../../token';

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
    list-style: none;
    padding-left: 0.5rem;
  }

  @media ${mq.tablet} {
    :global(.richtext ul) {
      list-style: none;
      padding-left: 1rem;
    }
  }

  :global(.richtext li) {
    position: relative;
  }

  :global(.richtext li:before) {
    color: ${colors.blueBrand};
    content: '·';
    font-size: 1.75rem;
    left: -0.65rem;
    line-height: 1;
    position: absolute;
    top: -0.1rem;
    vertical-align: middle;
  }

  @media ${mq.tablet} {
    :global(.richtext li:before) {
      left: -0.75rem;
      top: 0.25rem;
    }
  }

  :global(.richtext li + li) {
    margin-top: 1rem;
  }

  :global(.richtext h2) {
    ${mixins.text('big')}

    margin-bottom: 0.5rem;
    margin-top: 2rem;
  }

  @media ${mq.tablet} {
    :global(.richtext h2) {
      ${mixins.text('big', 'tablet')}

      margin-bottom: 0.75rem;
      margin-top: 2.5rem;
    }
  }

  @media ${mq.desktop} {
    :global(.richtext h2) {
      ${mixins.text('big', 'desktop')}

      margin-bottom: 1rem;
      margin-top: 3rem;
    }
  }

  :global(.richtext h3) {
    ${mixins.text('medium')}

    margin-bottom: 0.25rem;
    margin-top: 1.5rem;
  }

  @media ${mq.tablet} {
    :global(.richtext h3) {
      ${mixins.text('medium', 'tablet')}

      margin-bottom: 0.5rem;
      margin-top: 1.75rem;
    }
  }

  @media ${mq.desktop} {
    :global(.richtext h3) {
      ${mixins.text('medium', 'desktop')}

      margin-bottom: 0.75rem;
      margin-top: 2rem;
    }
  }

  :global(.richtext a:hover),
  :global(.richtext a:focus) {
    color: ${colors.blueBrand};
  }
`;
