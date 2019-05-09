import React from 'react';
import Link from 'gatsby-link';

import Constraint from '../constraint';
import style, { link, linkActive } from './style';

const Item = ({ to, children, ...attributes }) => (
  <Link
    to={to}
    className={link.className}
    activeClassName={linkActive.className}
    partiallyActive
    {...attributes}
  >
    {children}
  </Link>
);

export default ({ items = [] }) => (
  <Constraint>
    <nav className="menu">
      <style jsx>{style}</style>
      {link.styles}
      {linkActive.styles}

      <ul>
        <li key="menu-start`">
          <Item to="/" partiallyActive={false}>
            Start
          </Item>
        </li>

        {items.map(([label, path]) => (
          <li key={`menu-${label}`}>
            <Item to={path}>{label}</Item>
          </li>
        ))}
      </ul>
    </nav>
  </Constraint>
);
