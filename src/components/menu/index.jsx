import { graphql } from 'gatsby';
import React from 'react';
import Link from 'gatsby-link';

import style, {
  link,
  linkActive,
  logo,
  logoLink,
  socialMediaLink,
  socialMediaLabel,
  socialMediaIcon,
} from './style';

import LinkedInIcon from '../../../static/icons/linkedin.svg';
import Logo from '../../../static/logos/coal-transitions.svg';
import TwitterIcon from '../../../static/icons/twitter.svg';

export const fragment = graphql`
  fragment Menu on WpMenu {
    items: menuItems {
      nodes {
        url
        label
      }
    }
  }

  fragment MenuSocialMediaItems on SiteSiteMetadata {
    socialMediaChannels {
      twitter
      linkedIn
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

export default ({ items: { nodes: items = [] }, socialMediaChannels }) => (
  <nav className="menu">
    <style jsx>{style}</style>
    {link.styles}
    {linkActive.styles}
    {logo.styles}
    {logoLink.styles}
    {socialMediaLink.styles}
    {socialMediaLabel.styles}
    {socialMediaIcon.styles}

    <Link to="/" className={logoLink.className}>
      <Logo className={logo.className} />
    </Link>

    <ul>
      {items.map(({ url, label }) => (
        <li key={`menu-${label}`}>
          <Item to={url}>{label}</Item>
        </li>
      ))}

      {(socialMediaChannels?.twitter || socialMediaChannels?.linkedIn) && (
        <li>
          {socialMediaChannels?.twitter && (
            <a
              href={socialMediaChannels.twitter}
              aria-label="Follow us on Twitter"
              className={socialMediaLink.className}
            >
              <TwitterIcon className={socialMediaIcon.className} />
            </a>
          )}

          {socialMediaChannels?.linkedIn && (
            <a
              href={socialMediaChannels.linkedIn}
              aria-label="Follow us on LinkedIn"
              className={socialMediaLink.className}
            >
              <LinkedInIcon className={socialMediaIcon.className} />
            </a>
          )}
        </li>
      )}
    </ul>
  </nav>
);
