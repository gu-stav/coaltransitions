import React from 'react';

import style from './style';

export default ({ items }) => (
  <ul>
    <style jsx>{style}</style>
    {items.map(({ link, linkText }) => (
      <li key={link}>
        <a href={link} className="link">
          {linkText || link}
        </a>
      </li>
    ))}
  </ul>
);
