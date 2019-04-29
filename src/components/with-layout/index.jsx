import Helmet from 'react-helmet';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

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
    <>
      <style jsx>{style}</style>

      <Helmet titleTemplate={`%s | ${title}`} />

      <div className="site">
        <Children {...props} />
      </div>
    </>
  );
};
