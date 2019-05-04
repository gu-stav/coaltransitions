import css from 'styled-jsx/css';

export default css`
  .row {
    display: flex;
    flex-direction: row;
  }

  .row + .row {
    margin-top: 1.5rem;
  }

  .column {
    flex: 1 0 50%;
  }

  .column + .column {
    margin-left: 1.5rem;
  }
`;
