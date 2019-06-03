import React from 'react';

import ReserchProject from './research-project';
import style from './style';

export default ({ items = [], ...props }) => (
  <ul {...props}>
    <style jsx>{style}</style>

    {items.map(item => (
      <li>
        <ReserchProject {...item} />
      </li>
    ))}
  </ul>
);
