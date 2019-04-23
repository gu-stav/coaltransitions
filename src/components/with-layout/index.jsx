import Helmet from 'react-helmet';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import SideColumn from './side-column';
import style from './style';

export default Children => props => {
  const {
    site: {
      siteMetadata: { title }
    }
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <main className="site">
      <style jsx>{style}</style>

      <Helmet titleTemplate={`%s | ${title}`} />

      <SideColumn />
      <div className="site-container">
        <Children {...props} />
      </div>
    </main>
  );
};
