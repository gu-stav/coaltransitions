import React from 'react';

import style from './style';

export default ({ content }) => (
  <>
    <style jsx>{style}</style>
    <div className="richtext" dangerouslySetInnerHTML={{ __html: content }} />
  </>
);
