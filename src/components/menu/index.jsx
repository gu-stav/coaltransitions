import { graphql } from 'gatsby';
import React from 'react';
import Link from 'gatsby-link';

import style, { link, linkActive, logo, logoLink } from './style';

import Logo from '../../../static/logos/coal-transitions.svg';

export const fragment = graphql`
  fragment Menu on WpMenu {
    items: menuItems {
      nodes {
        url
        label
      }
    }
  }
`;

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

export default ({ items: { nodes: items = [] } }) => (
  <nav className="menu">
    <style jsx>{style}</style>
    {link.styles}
    {linkActive.styles}
    {logo.styles}
    {logoLink.styles}

    <Link to="/" className={logoLink.className}>
      <Logo className={logo.className} />
    </Link>

    <ul>
      {items.map(({ url, label }) => (
        <li key={`menu-${label}`}>
          <Item to={url}>{label}</Item>
        </li>
      ))}
    </ul>
  </nav>
);
