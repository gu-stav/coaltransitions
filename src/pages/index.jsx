import React from 'react';
import { graphql } from 'gatsby';

import Constraint from '../components/constraint';
import PublicationList from '../components/publication-list';
import TwitterTimeline from '../components/twitter-timeline';
import withLayout from '../components/with-layout';

const Page = ({
  data: {
    publications: { nodes: publications }
  }
}) => (
  <>
    <Constraint>
      <PublicationList
        title="Featured Publications"
        publications={publications}
      />
    </Constraint>

    <Constraint>
      <TwitterTimeline
        title="News"
        endpoint="/.netlify/functions/twitter-timeline"
      />
    </Constraint>
  </>
);

export const query = graphql`
  query {
    publications: allWordpressWpPublications(
      filter: { acf: { featured: { eq: true } } }
      limit: 5
      sort: { fields: acf___year, order: DESC }
    ) {
      nodes {
        ...publicationListItem
      }
    }
  }
`;

export default withLayout(Page);
