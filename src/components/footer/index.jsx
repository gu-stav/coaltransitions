import Link from 'gatsby-link';
import React from 'react';

import GreenStroke from '../../../static/strokes/stroke-5-green.svg';
import style, { item, greenStroke } from './style';

export default ({ items: { nodes: items = [] } }) => (
  <footer>
    <style jsx>{style}</style>
    {item.styles}
    {greenStroke.styles}

    <GreenStroke className={greenStroke.className} />

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1871 622"
      className="background"
    >
      <path
        fill="none"
        fillRule="evenodd"
        stroke="#2E56B4"
        strokeWidth="300"
        d="M1833.7 403s-283.6-72.1-479.2-63.3c-211.3 9.5-383 154.6-627.5 129-244.5-25.5-431.4-261.5-692.3-322.3"
      />
    </svg>

    <ul>
      {items.map(({ url, label }) => (
        <li>
          <Link to={url} className={item.className}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </footer>
);
