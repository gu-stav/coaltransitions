import { graphql } from 'gatsby';
import React from 'react';

import NewsListItem from './NewsListItem';

import style from './style';

export const fragment = graphql`
  fragment NewsList on WpNewsEntryConnection {
    nodes {
      ...NewsListItem
    }
  }
`;

const NewsList = ({ nodes = [] }) => (
  <div className="container">
    <style jsx>{style}</style>

    {Array.isArray(nodes) && (
      <ul>
        {nodes.map((node) => (
          <li>
            <NewsListItem {...node} />
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default NewsList;
