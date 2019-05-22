import Link from 'gatsby-link';
import React from 'react';

import style, { linkStyle } from './style';

export default ({ authors, trim = false, onFilter }) => (
  <ul>
    <style jsx>{style}</style>
    {linkStyle.styles}

    {authors.map(({ name }, index) => {
      if (trim !== false && trim <= index) {
        return null;
      }

      return (
        <li key={`author-${name}`}>
          <Link
            to={`/publications/?authors=${encodeURIComponent(name)}`}
            onClick={event => {
              event.preventDefault();
              onFilter('authors', [name]);
            }}
            className={linkStyle.className}
          >
            {name}
          </Link>
        </li>
      );
    })}
  </ul>
);
