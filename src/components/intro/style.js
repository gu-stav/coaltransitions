import css from 'styled-jsx/css';

import { mixins, colors, mq } from '../../token';

export default css`
  p {
    ${mixins.text()}

    color: ${colors.blueAction};
    font-weight: 700;
  }

  @media ${mq.tablet} {
    p {
      ${mixins.text('regular', 'tablet')}

      font-weight: 700;
    }
  }

  @media ${mq.desktop} {
    p {
      ${mixins.text('regular', 'desktop')}

      font-weight: 700;
    }
  }
`;
