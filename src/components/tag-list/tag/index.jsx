import Link from 'gatsby-link';
import React from 'react';

import { linkStyle } from './style';

export default ({ to, slug, children, onFilter, ...attributes }) => (
  <Link
    to={`/publications/?keywords=${slug}`}
    onClick={event => {
      if (onFilter) {
        event.preventDefault();
        onFilter('tags', [slug]);
      }
    }}
    className={linkStyle.className}
    {...attributes}
  >
    {linkStyle.styles}
    {children}
  </Link>
);
