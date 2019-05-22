import Link from 'gatsby-link';
import React from 'react';

import { linkStyle } from './style';

export default ({ to, slug, children, onFilter, ...attributes }) => (
  <Link
    to={`/publications/?keywords=${slug}`}
    onClick={event => {
      event.preventDefault();
      onFilter('tags', [slug]);
    }}
    className={linkStyle.className}
    {...attributes}
  >
    {linkStyle.styles}
    {children}
  </Link>
);
