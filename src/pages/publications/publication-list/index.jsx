import React from 'react';

import Publication from './publication';
import style from './style';

export default ({ publications }) => (
  <ul>
    <style jsx>{style}</style>

    {publications.map(({ slug, ...attibutes }) => (
      <li>
        <Publication url={`/publications/${slug}/`} {...attibutes} />
      </li>
    ))}
  </ul>
);
