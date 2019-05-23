import React from 'react';

import Button from '../../button';
import style, { icon } from './style';

export default ({ children, ...rest }) => (
  <div className="container">
    <style jsx>{style}</style>
    {icon.styles}

    <div className="button-container">
      <Button {...rest}>{children}</Button>
    </div>
  </div>
);
