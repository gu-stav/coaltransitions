import Link from 'gatsby-link';
import React from 'react';

import style, { item } from './style';

export default ({ items }) => (
  <footer>
    <style jsx>{style}</style>
    {item.styles}

    <ul>
      {items.map(([title, link]) => (
        <li>
          <Link to={link} className={item.className}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </footer>
);
