import { graphql } from 'gatsby';
import React from 'react';

import BlockSwitch from '../../BlockSwitch';

export const fragment = graphql`
  fragment NewsListItem on WpNewsEntry {
    title
  }
`;

const NewsListItem = ({ title }) => (
  <article>
    <h2>{title}</h2>

    <BlockSwitch />
  </article>
);

export default NewsListItem;
