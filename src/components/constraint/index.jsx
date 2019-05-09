import React from 'react';

import style from './style';

export default ({ children, wide = false, ...attrs }) => (
  <div className={`constraint ${wide && 'constraint--wide'}`} {...attrs}>
    <style jsx>{style}</style>

    {children}
  </div>
);
