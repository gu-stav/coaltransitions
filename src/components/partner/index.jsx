import React from 'react';
import { graphql } from 'gatsby';

import Picture from '../picture';
import Richtext from '../richtext';
import style from './style';

export default ({ name, summary, link, logo }) => (
  <div className="partner">
    <style jsx>{style}</style>

    {logo && logo.localFile && (
      <a href={link} rel="nofollow" className="image-container">
        <Picture image={logo.localFile} />
      </a>
    )}

    <div className="content-container">
      <h3 className="title">
        <a href={link} className="title-link">
          {name}
        </a>
      </h3>

      <Richtext content={summary} />
    </div>
  </div>
);

export const fragment = graphql`
  fragment PartnerPage on WpPage_Acf_Content_Partner {
    name
    summary
    link
    logo {
      localFile {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...Picture
          }
        }
      }
    }
  }

  fragment PartnerAbout on WpAboutPage_Acf_Content_Partner {
    name
    summary
    link
    logo {
      localFile {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...Picture
          }
        }
      }
    }
  }
`;
