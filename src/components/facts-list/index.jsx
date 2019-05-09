import React from 'react';

import Fact from './fact';
import style from './style';

export default ({ facts = [] }) => (
  <ul>
    <style jsx>{style}</style>

    {facts.map((fact, index) => (
      <li key={fact}>
        <Fact theme={index % 2 === 0 ? null : 'green'} {...fact} />
      </li>
    ))}
  </ul>
);
