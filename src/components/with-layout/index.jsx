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
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
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
        <Menu {...headerMenu} />
        <Children {...props} />
        <Footer {...footerMenu} />
      </div>
    </>
  );
};
