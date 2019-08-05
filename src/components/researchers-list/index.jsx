import React from 'react';

import Researcher from './researcher';
import { sortBySecondName } from '../../lib/sort-by-second-name';
import style from './style';

export default ({ items = [], ...props }) => {
  // Sort researchers by second name
  const researchers = items.sort(sortBySecondName);

  const pinnedResearchers = researchers.filter(
    ({ acf: { pin_to_top: pinToTop } }) => pinToTop === true
  );

  const coalExitResearchers = researchers.filter(
    ({
      acf: { part_of_coalexit_group: partOfCoalExit, pin_to_top: pinToTop }
    }) => partOfCoalExit === true && !pinToTop
  );

  const externalResearchers = researchers.filter(
    ({
      acf: { part_of_coalexit_group: partOfCoalExit, pin_to_top: pinToTop }
    }) => partOfCoalExit === false && !pinToTop
  );
  
  const nonPinnedResearchers = researchers.filter(
    ({
      acf: { pin_to_top: pinToTop }
    }) => !pinToTop
  );

  return (
    <>
      <style jsx>{style}</style>

      // <h2>Coal Exit Group</h2>
      <ul {...props}>
        {pinnedResearchers.map(item => (
          <li>
            <Researcher {...item} />
          </li>
        ))}

        {nonPinnedResearchers.map(item => (
          <li>
            <Researcher {...item} />
          </li>
        ))}
      </ul>
    </>
  );
};
