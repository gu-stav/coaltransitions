import Link from 'gatsby-link';
import React from 'react';

import style, { linkStyle } from './style';

export default ({ authors, trim = false }) => (
  <ul>
    <style jsx>{style}</style>
    {linkStyle.styles}

    {authors.map(({ name }, index) => {
      if (trim !== false && trim <= index) {
        return null;
      }

      return (
        <li>
          <Link
            to={`/publications/?authors=${encodeURIComponent(name)}`}
            className={linkStyle.className}
          >
            {name}
          </Link>
        </li>
      );
    })}
  </ul>
);
