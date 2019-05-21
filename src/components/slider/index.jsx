import { Range } from 'rc-slider';
import React from 'react';

import style from './style';

export default props => (
  <div className="slider-container">
    <style jsx>{style}</style>
    <Range {...props} />
  </div>
);
