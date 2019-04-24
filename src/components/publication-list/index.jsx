import React from 'react';

import Publication from './publication';
import style from './style';

export default ({ publications = [], onFilter }) => (
  <>
    {publications.length > 0 ? (
      <ul>
        <style jsx>{style}</style>

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
  </>
);
