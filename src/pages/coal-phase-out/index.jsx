import Helmet from 'react-helmet';
import React from 'react';
import { graphql } from 'gatsby';

import FactsList from '../../components/facts-list';
import withLayout from '../../components/with-layout';

const Page = ({
  data: {
    facts: { nodes: facts }
  }
}) => (
  <>
    <Helmet title="Coal Phase-Out" />
    <FactsList facts={facts} />
  </>
);

export default withLayout(Page);

export const query = graphql`
  query {
    facts: allWordpressWpCoalPhaseOut(sort: { fields: [acf___fact_number] }) {
      nodes {
        ...factListItem
      }
    }
  }
`;
