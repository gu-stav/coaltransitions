import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import React from 'react';

import News from '../../components/News';
import withLayout from '../../components/with-layout';

const NewsEntryPage = ({ data: { wpNewsEntry } }) => (
  <>
    <Helmet title={wpNewsEntry.title} />

    <News {...wpNewsEntry} />
  </>
);

export const query = graphql`
  query($databaseId: Int) {
    wpNewsEntry(databaseId: { eq: $databaseId }) {
      ...NewsEntry
    }
  }
`;

export default withLayout(NewsEntryPage);
