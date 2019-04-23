import React from 'react';

import SideColumn from './side-column';
import style from './style';

export default Children => props => (
  <main className="site">
    <style jsx>{style}</style>

    <SideColumn />
    <Children {...props} />
  </main>
);
