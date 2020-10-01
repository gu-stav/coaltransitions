import { graphql } from 'gatsby';
import React from 'react';

import NewsListItem from './NewsListItem';

export const fragment = graphql`
  fragment NewsList on WpNewsEntryConnection {
    nodes {
      ...NewsListItem
    }
  }
`;

const NewsList = ({ nodes = [] }) => (
  <>
    {Array.isArray(nodes) && (
      <ul>
        {nodes.map((node) => (
          <NewsListItem {...node} />
        ))}
      </ul>
    )}
  </>
);

export default NewsList;
