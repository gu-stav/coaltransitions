import { Helmet } from 'react-helmet';
import React from 'react';
import { graphql } from 'gatsby';

import FindingsList from '../../components/findings-list';
import withLayout from '../../components/with-layout';

const Page = ({
  data: {
    findings: { nodes: findings }
  }
}) => (
  <>
    <Helmet title="Findings" />
    <FindingsList findings={findings} />
  </>
);

export default withLayout(Page);

export const query = graphql`
  query {
    findings: allWordpressWpFindings(sort: { fields: [acf___fact_number] }) {
      nodes {
        ...findingListItem
      }
    }
  }
`;
