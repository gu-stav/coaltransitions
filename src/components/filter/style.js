import css from 'styled-jsx/css';

export default css`
  .row {
    display: flex;
    flex-direction: row;
  }

  .row + .row {
    margin-top: 1.5rem;
  }

  /* Reset button */
  .row:nth-child(2) .column:last-child {
    flex: 0 1 auto;
    padding-left: 3.5rem;
  }

  .column {
    flex: 1 0 50%;
  }

  .column + .column {
    padding-left: 1.5rem;
  }
`;
