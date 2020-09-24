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

  const nonPinnedResearchers = researchers.filter(
    ({ acf: { pin_to_top: pinToTop } }) => !pinToTop
  );

  return (
    <>
      <style jsx>{style}</style>

      <ul {...props}>
        {pinnedResearchers.map((item) => (
          <li>
            <Researcher {...item} />
          </li>
        ))}

        {nonPinnedResearchers.map((item) => (
          <li>
            <Researcher {...item} />
          </li>
        ))}
      </ul>
    </>
  );
};
