import Link from 'gatsby-link';
import React from 'react';

import { linkStyle } from './style';

export default ({ external = false, children, to, theme, ...attributes }) => (
  <>
    {linkStyle.styles}

    {external ? (
      <a href={to} className={linkStyle.className} {...attributes}>
        {children}
      </a>
    ) : (
      <Link to={to} className={linkStyle.className} {...attributes}>
        {children}
      </Link>
    )}
  </>
);
