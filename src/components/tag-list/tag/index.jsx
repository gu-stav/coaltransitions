import Link from 'gatsby-link';
import React from 'react';

import { linkStyle } from './style';

export default ({ to, slug, children, ...attributes }) => (
  <Link
    to={`/publications/?keywords=${slug}`}
    className={linkStyle.className}
    {...attributes}
  >
    {linkStyle.styles}
    {children}
  </Link>
);
