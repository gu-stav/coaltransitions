import React from 'react';

import style from './style';

export default ({ children, ...attrs }) => (
  <div className="constraint" {...attrs}>
    <style jsx>{style}</style>

    {children}
  </div>
);
