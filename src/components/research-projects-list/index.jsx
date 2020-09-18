import React from 'react';

import ReserchProject from './research-project';
import style from './style';

export default ({ items = [], tags = [], ...props }) => (
  <ul {...props}>
    <style jsx>{style}</style>

    {items.map((item) => (
      <li key={`research-project-${item.title}`}>
        <ReserchProject {...item} tags={tags} />
      </li>
    ))}
  </ul>
);
