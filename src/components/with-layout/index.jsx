import React from 'react';

import style from './style';

export default Children => props => (
  <>
    <style jsx>{style}</style>
    <Children {...props} />
  </>
);
