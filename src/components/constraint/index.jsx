import classnames from 'classnames';
import React from 'react';

import style from './style';

export default ({
  children,
  wide = false,
  superwide = false,
  topLevel = false,
  ...attrs
}) => (
  <div
    className={classnames(
      'constraint',
      { 'constraint--wide': wide },
      { 'constraint--superwide': superwide },
      { 'constraint--toplevel': topLevel }
    )}
    {...attrs}
  >
    <style jsx>{style}</style>

    {children}
  </div>
);
