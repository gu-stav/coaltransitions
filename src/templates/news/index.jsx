import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import React from 'react';

import Constraint from '../../components/constraint';
import withLayout from '../../components/with-layout';

const Page = ({
  data: {
    wpNewsEntry: { title },
  },
}) => (
  <>
    <Helmet title={title} />

    <Constraint>News Text</Constraint>
  </>
);

export const query = graphql`
  query($databaseId: Int) {
    wpNewsEntry(databaseId: { eq: $databaseId }) {
      title
    }
  }
`;

export default withLayout(Page);
