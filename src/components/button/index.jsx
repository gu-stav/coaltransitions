// eslint-disable-next-line no-unused-vars
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
  const Tag = to ? 'Link' : 'button';
  const props = {
    ...attributes,
    ...(to && { to })
  };

  return (
    <>
      {linkStyle.styles}

      {external ? (
        <a href={to} className={linkStyle.className} {...attributes}>
          {children}
        </a>
      ) : (
        <Tag className={linkStyle.className} {...props}>
          {children}
        </Tag>
      )}
    </>
  );
};
