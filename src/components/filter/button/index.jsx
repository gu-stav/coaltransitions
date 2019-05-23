import React from 'react';

import Button from '../../button';
import FilterIcon from '../../../../static/icons/filter.svg';
import style, { icon } from './style';

export default ({ children, ...rest }) => (
  <div className="container">
    <style jsx>{style}</style>
    {icon.styles}

    <Button theme="blue" {...rest}>
      <FilterIcon className={icon.className} />
      {children}
    </Button>
  </div>
);
