import React from 'react';

import Researcher from './researcher';
import style from './style';

export default ({ items = [], ...props }) => {
  const coalExitResearchers = items.filter(
    ({ acf: { part_of_coalexit_group: partOfCoalExit } }) =>
      partOfCoalExit === true
  );

  const externalResearchers = items.filter(
    ({ acf: { part_of_coalexit_group: partOfCoalExit } }) =>
      partOfCoalExit === false
  );

  return (
    <>
      <style jsx>{style}</style>

      <h2>Coal Exit Group</h2>
      <ul {...props}>
        {coalExitResearchers.map(item => (
          <li>
            <Researcher {...item} />
          </li>
        ))}
      </ul>

      <h2>External Researchers</h2>
      <ul {...props}>
        {externalResearchers.map(item => (
          <li>
            <Researcher {...item} />
          </li>
        ))}
      </ul>
    </>
  );
};
