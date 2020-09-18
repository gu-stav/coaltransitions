import Helmet from 'react-helmet';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Footer from '../footer';
import Menu from '../menu';
import style from './style';

export default (Children) => (props) => {
  const {
    site: {
      siteMetadata: { title, menu, footer },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          footer
          menu
        }
      }
    }
  `);

  return (
    <>
      <style jsx>{style}</style>

      <Helmet titleTemplate={`%s | ${title}`} />

      <div className="site">
        <Menu items={menu} />
        <Children {...props} />
        <Footer items={footer} />
      </div>
    </>
  );
};
