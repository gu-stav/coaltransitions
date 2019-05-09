import React from 'react';

import Fact from './fact';
import style from './style';

export default ({ facts = null }) => (
  <ul>
    <style jsx>{style}</style>

    {facts &&
      facts.map((fact, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={`fact=${index}`}>
          <Fact {...fact} theme={index % 2 === 0 ? null : 'green'} />
        </li>
      ))}
  </ul>
);
