import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import React from 'react';

import NewsList from '../../components/NewsList';
import withLayout from '../../components/with-layout';

const Page = ({ data: { allWpNewsEntry } }) => (
  <>
    <Helmet title="News" />

    <NewsList {...allWpNewsEntry} />
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
