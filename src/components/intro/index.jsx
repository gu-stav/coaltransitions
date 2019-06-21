import React from 'react';

import style from './style';

export default ({ intro }) => (
  <div className="intro">
    <style jsx>{style}</style>
    <p dangerouslySetInnerHTML={{ __html: intro }} />
  </div>
);
