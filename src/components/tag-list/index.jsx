import React from 'react';

import style from './style';
import Tag from './tag';

export default ({ tags, trim = false, onFilter = false }) => (
  <ul>
    <style jsx>{style}</style>

    {tags.map(({ name, slug }, index) => {
      if (trim !== false && trim <= index) {
        return null;
      }

      return (
        <li key={`tag-${slug}`}>
          <Tag slug={slug} onFilter={onFilter}>
            {name}
          </Tag>
        </li>
      );
    })}
  </ul>
);
