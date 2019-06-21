import css from 'styled-jsx/css';

import { mixins, colors, mq } from '../../token';

export default css`
  .intro {
    width: 100%;
  }

  p {
    ${mixins.text('medium')}

    color: ${colors.blueAction};
    font-weight: 700;
  }

  @media ${mq.tablet} {
    p {
      ${mixins.text('medium', 'tablet')}

      font-weight: 700;
    }
  }

  @media ${mq.desktop} {
    p {
      ${mixins.text('medium', 'desktop')}

      font-weight: 700;
    }
  }
`;
