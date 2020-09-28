import { graphql } from 'gatsby';
import React from 'react';

import Picture from '../picture';

export const fragment = graphql`
  fragment LogoGrid on WpPage_Acf_Content_LogoGrid {
    logos {
      link
      image {
        fluid(maxWidth: 200) {
          ...Picture
        }
      }
    }
  }
`;

const LogoGrid = ({ logos, ...props }) => (
  <ul {...props}>
    {logos.map(({ link, image }) => (
      <li>
        <a href={link}>
          <Picture {...image} />
        </a>
      </li>
    ))}
  </ul>
);

export default LogoGrid;
