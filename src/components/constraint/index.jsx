import React from 'react';

import style from './style';

export default ({ children, wide = false, topLevel = false, ...attrs }) => (
  <div
    className={`constraint ${wide && 'constraint--wide'} ${topLevel &&
      'constraint--toplevel'}`}
    {...attrs}
  >
    <style jsx>{style}</style>

    {children}
  </div>
);
