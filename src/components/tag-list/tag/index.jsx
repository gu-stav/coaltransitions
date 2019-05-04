import Link from 'gatsby-link';
import React from 'react';

import { linkStyle } from './style';

export default ({ to, children, ...attributes }) => (
  <Link to={to} className={linkStyle.className} {...attributes}>
    {linkStyle.styles}
    {children}
  </Link>
);
