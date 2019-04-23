import Link from 'gatsby-link';
import React from 'react';

import { linkStyle } from './style';

export default ({ to, children }) => (
  <Link to={to} className={linkStyle.className}>
    {linkStyle.styles}
    {children}
  </Link>
);
