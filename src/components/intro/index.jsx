import React from 'react';

import style from './style';

export default ({ intro }) => (
  <div>
    <style jsx>{style}</style>
    <p dangerouslySetInnerHTML={{ __html: intro }} />
  </div>
);
