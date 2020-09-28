import { graphql } from 'gatsby';
import React from 'react';

import Picture from '../picture';

import style from './style';

export const fragment = graphql`
  fragment LogoGrid on WpPage_Acf_Content_Logogrid {
    logos {
      link
      logo {
        localFile {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...Picture
            }
          }
        }
      }
    }
  }
`;

const LogoGrid = ({ logos, ...props }) => (
  <ul {...props}>
    <style jsx>{style}</style>

    {logos.map(({ link, logo }) => (
      <li>
        <a href={link}>
          <div>
            <Picture image={logo?.localFile} />
          </div>
        </a>
      </li>
    ))}
  </ul>
);

export default LogoGrid;
