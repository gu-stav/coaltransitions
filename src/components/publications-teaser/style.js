import css from 'styled-jsx/css';

import { mixins, colors, mq } from '../../token';

export default css`
  .title {
    ${mixins.text('extra-big')}

    color: ${colors.blueBrand};
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
`;
