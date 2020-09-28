import { graphql } from 'gatsby';
import React from 'react';

import Button from '../button';

export const fragment = graphql`
  fragment Newsletter on WpPage_Acf_Content_Newsletter {
    title
    intro
    link
    linkLabel
  }
`;

const Newsletter = ({ title, intro, link, linkLabel, ...props }) => (
  <div {...props}>
    <h2>{title}</h2>

    {intro && <p>{intro}</p>}

    <Button to={link}>{linkLabel}</Button>
  </div>
);

export default Newsletter;
