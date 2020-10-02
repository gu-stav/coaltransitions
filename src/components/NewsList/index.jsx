import { graphql } from 'gatsby';
import React from 'react';

import Button from '../button';
import NewsListItem from './NewsListItem';

import style from './style';

export const fragment = graphql`
  fragment NewsList on WpNewsEntryConnection {
    nodes {
      ...NewsListItem
    }
  }
`;

const NewsList = ({ title, nodes = [] }) => (
  <div className="container">
    <style jsx>{style}</style>

    {title && (
      <h2 className="title">
        {title}

        <hr />

        <Button to="/news/" theme="blue">
          All News
        </Button>
      </h2>
    )}

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
