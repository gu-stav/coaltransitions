import React from 'react';

import Publication from './publication';
import style from './style';

export default ({ title, publications = [], onFilter }) => (
  <div className="publications-container">
    <style jsx>{style}</style>

    {title && <h2 className="title">{title}</h2>}

    {publications.length > 0 ? (
      <ul>
        {publications.map(({ slug, ...attibutes }) => (
          <li key={`publication-${slug}`}>
            <Publication
              url={`/publications/${slug}/`}
              onFilter={onFilter}
              {...attibutes}
            />
          </li>
        ))}
      </ul>
    ) : (
      <div>No publications matching your criteria ...</div>
    )}
  </div>
);
