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
    padding-left: 1rem;
  }

  :global(.richtext li) {
    position: relative;
  }

  :global(.richtext li:before) {
    color: ${colors.blueBrand};
    content: '·';
    font-size: 1.75rem;
    left: -0.75rem;
    line-height: 1;
    position: absolute;
    top: 0.25rem;
    vertical-align: middle;
  }

  :global(.richtext li + li) {
    margin-top: 1rem;
  }
`;
