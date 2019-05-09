import css from 'styled-jsx/css';

import { colors, mixins, mq } from '../../token';

export default css`
  .publication {
    display: flex;
    flex-direction: column;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media ${mq.tablet} {
    .publication {
      flex-direction: row;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }

  .header {
    display: flex;
    flex-direction: column;
  }

  .cover-image {
    display: flex;
  }

  .cover-image img {
    justify-self: flex-end;
    margin-left: auto;
    max-width: 50%;
  }

  .title {
    ${mixins.text('extra-big')}

    margin-top: 0;
    text-align: right;
  }

  .year-text {
    ${mixins.text('medium')}

    background-color: ${colors.greenBrand};
    color: white;
    display: inline-block;
    margin-bottom: 2rem;
    margin-top: 2rem;
    padding: 0 0.5rem;
  }

  .subtitle {
    ${mixins.text('medium')}

    display: block;
    text-align: right;
  }

  .abstract {
    ${mixins.text()}
  }

  :global(.abstract > *:first-child) {
    margin-top: 0;
  }

  .header {
    flex: 0 0 35%;
  }

  .body {
    flex: 1 0 45%;
  }

  .meta {
    flex: 0 0 20%;
  }

  @media ${mq.tablet} {
    .body,
    .meta {
      padding-left: 2rem;
    }
  }

  @media ${mq.tablet} {
    .meta {
      align-self: flex-start;
      margin-top: 25%;
      position: sticky;
      top: 1rem;
    }
  }

  .meta-block + .meta-block {
    margin-top: 1.5rem;
  }

  .meta-block-title {
    ${mixins.text('mini')}

    background: ${colors.blueBrand};
    box-decoration-break: clone;
    color: white;
    display: inline;
    font-weight: 700;
    margin-bottom: 0.5rem;
    margin-top: 0;
    padding: 0.17rem 0.4rem;
  }

  .meta-block-title ~ * {
    margin-top: 0.5rem;
  }

  .meta-block-content {
    ${mixins.text('small')}

    margin-bottom: 0;
    margin-top: 0;
  }

  .meta-block-list {
    ${mixins.resetList()}
  }
`;
