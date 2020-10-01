import { graphql } from 'gatsby';
import React from 'react';

import BlockSwitch from '../BlockSwitch';

export const fragment = graphql`
  fragment NewsEntry on WpNewsEntry {
    title

    acf {
      content {
        ... on WpNewsEntry_Acf_Content_Text {
          fieldGroupName
          text
        }

        ... on WpNewsEntry_Acf_Content_Image {
          fieldGroupName
        }
      }
    }
  }
`;

const News = ({ title, acf: { content } }) => (
  <article>
    <h1>{title}</h1>

    <BlockSwitch blocks={content} typePrefix="WpNewsEntry_Acf_Content_" />
  </article>
);

export default News;
