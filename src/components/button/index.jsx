import Link from 'gatsby-link';
import React from 'react';

import { linkStyle } from './style';

export default ({
  external = false,
  children,
  to = false,
  theme,
  ...attributes
}) => {
  const props = {
    ...attributes,
    ...(to && { to })
  };

  if (to) {
    return (
      <>
        {linkStyle.styles}

        {external ? (
          <a href={to} className={linkStyle.className} {...attributes}>
            {children}
          </a>
        ) : (
          <Link className={linkStyle.className} {...props}>
            {children}
          </Link>
        )}
      </>
    );
  }

  return (
    <button type="button" className={linkStyle.className} {...attributes}>
      {linkStyle.styles}
      {children}
    </button>
  );
};
