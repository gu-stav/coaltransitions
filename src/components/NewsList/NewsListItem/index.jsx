import { graphql } from 'gatsby';
import React from 'react';

export const fragment = graphql`
  fragment NewsListItem on WpNewsEntry {
    title
  }
`;

const NewsListItem = ({ title }) => (
  <div>
    <h2>{title}</h2>
  </div>
);

export default NewsListItem;
