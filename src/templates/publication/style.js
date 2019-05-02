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

  .body {
    flex: 2 1 55%;
  }

  .header {
    flex: 0 0 30%;
  }

  .meta {
    flex: 0 0 15%;
  }

  @media ${mq.tablet} {
    .body,
    .meta {
      margin-left: 1.5rem;
    }
  }

  @media ${mq.tablet} {
    .meta {
      align-self: flex-start;
      margin-top: 20%;
      position: sticky;
      top: 1rem;
    }
  }

  .meta-block + .meta-block {
    margin-top: 1.5rem;
  }

  .meta-block-title {
    ${mixins.text('small')}

    background: ${colors.blueBrand};
    color: white;
    display: inline-block;
    font-weight: 700;
    margin-bottom: 0.5rem;
    margin-top: 0;
    padding: 0 0.3rem;
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
