import { graphql } from 'gatsby';
import React from 'react';

import Picture from '../picture';

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
    {logos.map(({ link, logo }) => (
      <li>
        <a href={link}>
          <Picture {...logo?.localFile?.childImageSharp} />
        </a>
      </li>
    ))}
  </ul>
);

export default LogoGrid;
