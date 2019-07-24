import React from 'react';

import ExternalLinkIcon from '../../../static/icons/external-link-alt.svg';
import style, { icon } from './style';

export default ({ items }) => (
  <ul>
    <style jsx>{style}</style>
    {icon.styles}

    {items.map(({ link, linktext }) => (
      <li key={link}>
        <a href={link} className="link">
          {linktext || link}

          <ExternalLinkIcon className={icon.className} />
        </a>
      </li>
    ))}
  </ul>
);
