import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import React from 'react';

import BlockSwitch from '../../BlockSwitch';

import style, { titleLink } from './style';

export const fragment = graphql`
  fragment NewsListItem on WpNewsEntry {
    date(formatString: "DD.MM.YYYY")
    title
    uri
    acf {
      intro
    }
  }
`;

const NewsListItem = ({ title, date, uri, acf: { intro } }) => (
  <article>
    <style jsx>{style}</style>
    {titleLink.styles}

    <h2 className="title">
      <small className="date">{date}</small>
      <span className="title-text">
        <Link to={uri} className={titleLink.className}>
          {title}
        </Link>
      </span>
    </h2>

    <p className="intro">{intro}</p>

    <BlockSwitch />
  </article>
);

export default NewsListItem;
