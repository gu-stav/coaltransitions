import React from 'react';

import style from './style';

export default ({ rows = [] }) => (
  <div className="filter">
    <style jsx>{style}</style>

    {rows.map(row => (
      <div className="row">
        {row.map(column => (
          <div className="column">{column}</div>
        ))}
      </div>
    ))}
  </div>
);
