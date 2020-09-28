import { graphql } from 'gatsby';
import React from 'react';

import ArrowIcon from '../../../static/icons/arrow-alt-right.svg';
import Button from '../button';

import style, { arrowIcon } from './style';

export const fragment = graphql`
  fragment Newsletter on WpPage_Acf_Content_Newsletter {
    title
    intro
    link
    linklabel
  }
`;

const Newsletter = ({ title, intro, link, linklabel, ...props }) => (
  <div className="newsletter" {...props}>
    <style jsx>{style}</style>
    {arrowIcon.styles}

    <div className="content-container">
      <h2 className="title">{title}</h2>

      {intro && <p className="intro">{intro}</p>}
    </div>

    <Button to={link}>
      {linklabel} <ArrowIcon className={arrowIcon.className} />
    </Button>
  </div>
);

export default Newsletter;
