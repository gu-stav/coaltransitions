import React from 'react';

import style from './style';

export default ({ rows = [] }) => (
  <div className="filter">
    <style jsx>{style}</style>

    {rows.map((row, rowIndex) => (
      // eslint-disable-next-line react/no-array-index-key
      <div key={`filter-row-${rowIndex}`} className="row">
        {row.map((column, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={`filter-${index}`} className="column">
            {column}
          </div>
        ))}
      </div>
    ))}
  </div>
);
