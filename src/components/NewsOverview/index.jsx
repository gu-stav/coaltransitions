import React from 'react';

import Constraint from '../constraint';
import NewsList from '../NewsList';

import style from './style';

const NewsOverview = (props) => (
  <div className="container">
    <style jsx>{style}</style>

    <Constraint topLevel>
      <NewsList {...props} />
    </Constraint>
  </div>
);

export default NewsOverview;
