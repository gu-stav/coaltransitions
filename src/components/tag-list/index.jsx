import React from 'react';

import style, { linkStyle } from './style';
import Tag from './tag';

export default ({ tags, trim = false }) => (
  <ul>
    <style jsx>{style}</style>
    {linkStyle.styles}

    {tags.map(({ name }, index) => {
      if (trim !== false && trim <= index) {
        return null;
      }

      return (
        <li>
          <Tag>{name}</Tag>
        </li>
      );
    })}
  </ul>
);
