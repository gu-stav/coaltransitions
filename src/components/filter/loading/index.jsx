import React from 'react';

import style from './style';

export default ({ text, ...props }) => (
  <div {...props}>
    <style jsx>{style}</style>

    <p>{text}</p>
  </div>
);
