import css from 'styled-jsx/css';

import { colors, mixins } from '../../token';

export default css`
  .header,
  .body {
    display: flex;
    flex-direction: row;
  }

  .header {
    margin-top: 10rem;
  }

  .content-container {
    width: 75%;
  }

  .meta-container {
    margin-left: 2.5rem;
    width: 25%;
  }

  .title {
    ${mixins.textHuge};

    margin-top: 0;
  }

  .cover-image img {
    border: 1px solid ${colors.greyLight};
    max-width: 100%;
  }

  .year,
  .subtitle {
    ${mixins.textStandard};
    display: block;
  }

  .abstract {
    ${mixins.textStandard};
  }

  .meta-block-title {
    ${mixins.textSmall};

    color: ${colors.greyDarkLight};
    font-weight: 700;
    margin-bottom: 0.25rem;
    margin-top: 1.5rem;
  }

  .meta-block-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    margin-top: 0;
    padding-left: 0;
  }

  .meta-block-content {
    ${mixins.textSmall};

    margin-bottom: 0;
    margin-top: 0;
  }
`;
