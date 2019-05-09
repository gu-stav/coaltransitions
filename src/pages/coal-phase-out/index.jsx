import React from 'react';
import { graphql } from 'gatsby';

import FactsList from '../../components/facts-list';
import withLayout from '../../components/with-layout';

const Page = ({
  data: {
    facts: { nodes: facts }
  }
}) => <FactsList facts={facts} />;

export default withLayout(Page);

export const query = graphql`
  query {
    facts: allWordpressWpCoalPhaseOut {
      nodes {
        ...factListItem
      }
    }
  }
`;
