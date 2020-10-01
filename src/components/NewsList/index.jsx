import { graphql } from 'gatsby';
import React from 'react';

import Constraint from '../constraint';
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

    <Constraint topLevel>
      {Array.isArray(nodes) && (
        <ul>
          {nodes.map((node) => (
            <li>
              <NewsListItem {...node} />
            </li>
          ))}
        </ul>
      )}
    </Constraint>
  </div>
);

export default NewsList;
