import React from 'react';

import style from './style';

export default ({ items }) => (
  <ul>
    <style jsx>{style}</style>
    {items.map(({ link, linktext }) => (
      <li key={link}>
        <a href={link} className="link">
          {linktext || link}
        </a>
      </li>
    ))}
  </ul>
);
