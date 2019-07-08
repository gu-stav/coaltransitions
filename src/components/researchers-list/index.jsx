import React from 'react';

import Researcher from './researcher';
import { sortBySecondName } from '../../lib/sort-by-second-name';
import style from './style';

const sortByBoss = ({ title: aName }, { title: bName }) => {
  const name = 'Pao-Yu Oei';

  if (aName === name || bName === name) {
    return 1;
  }

  return 0;
};

export default ({ items = [], ...props }) => {
  // Sort researchers by second name
  const researchers = items.sort(sortBySecondName);

  const coalExitResearchers = researchers
    .filter(
      ({ acf: { part_of_coalexit_group: partOfCoalExit } }) =>
        partOfCoalExit === true
    )
    .sort(sortByBoss);

  const externalResearchers = researchers.filter(
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
