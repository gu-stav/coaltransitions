import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import React from 'react';

import style, { item } from './style';

export const fragment = graphql`
  fragment SubMenuPages on WpPageConnection {
    items: nodes {
      title
      uri
    }
  }

  fragment SubMenuAbout on WpAboutPageConnection {
    items: nodes {
      title
      slug
      acf {
        shorttitle
      }
    }
  }
`;

export default ({ items }) => (
  <ul>
    <style jsx>{style}</style>
    {item.styles}

    {items &&
      items.map(({ title, slug, uri, acf }) => (
        <li key={`sub-menu-${uri}`}>
          <Link
            to={
              uri || (slug === 'research-hub' ? '/about/' : `/about/${slug}/`)
            }
            dangerouslySetInnerHTML={{ __html: acf?.shorttitle || title }}
            className={item.className}
          />
        </li>
      ))}
  </ul>
);
