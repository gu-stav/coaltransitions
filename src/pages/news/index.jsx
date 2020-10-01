import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import React from 'react';

import NewsOverview from '../../components/NewsOverview';
import withLayout from '../../components/with-layout';

const Page = ({ data: { allWpNewsEntry } }) => (
  <>
    <Helmet title="News" />
    <NewsOverview {...allWpNewsEntry} />
  </>
);

export default withLayout(Page);

export const query = graphql`
  query {
    allWpNewsEntry {
      ...NewsList
    }
  }
`;
