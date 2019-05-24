import Link from 'gatsby-link';
import React from 'react';

import style, { item } from './style';

export default ({ items }) => (
  <ul>
    <style jsx>{style}</style>
    {item.styles}

    {items &&
      items.map(({ title, slug }) => (
        <li>
          <Link
            to={slug === 'research-hub' ? '/about/' : `/about/${slug}/`}
            dangerouslySetInnerHTML={{ __html: title }}
            className={item.className}
          />
        </li>
      ))}
  </ul>
);
