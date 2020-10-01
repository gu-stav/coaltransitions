import { Helmet } from 'react-helmet';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Footer from '../footer';
import Menu from '../menu';
import style from './style';

export default (Children) => (props) => {
  const {
    site: {
      siteMetadata: { title },
    },
    footerMenu,
    headerMenu,
    headerMenuSocialMedia,
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }

      headerMenuSocialMedia: site {
        siteMetadata {
          ...MenuSocialMediaItems
        }
      }

      headerMenu: wpMenu(locations: { in: MENU }) {
        ...Menu
      }

      footerMenu: wpMenu(locations: { in: FOOTER }) {
        ...Menu
      }
    }
  `);

  return (
    <>
      <style jsx>{style}</style>

      <Helmet titleTemplate={`%s | ${title}`} />

      <div className="site">
        <Menu {...headerMenu} {...headerMenuSocialMedia.siteMetadata} />
        <Children {...props} />
        <Footer {...footerMenu} />
      </div>
    </>
  );
};
