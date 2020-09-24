import { Helmet } from 'react-helmet';
import React from 'react';
import { graphql } from 'gatsby';

import AboutTeaser from '../../components/about-teaser';
import Constraint from '../../components/constraint';
import PublicationsTeaser from '../../components/publications-teaser';
import FindingsTeaser from '../../components/findings-teaser';
import TwitterTimeline from '../../components/twitter-timeline';
import withLayout from '../../components/with-layout';

const Page = ({
  data: {
    page: {
      title,
      acf: { content: blocks },
    },
    publications: { nodes: publications },
  },
}) => (
  <>
    <Helmet title={title} />

    {blocks.map(({ __typename: typename, ...blockProps }) => {
      // eslint-disable-next-line default-case
      switch (typename) {
        case 'WpPage_Acf_Content_FeaturedPublications':
          return (
            <PublicationsTeaser publications={publications} {...blockProps} />
          );

        case 'WpPage_Acf_Content_AboutTeaser':
          return <AboutTeaser {...blockProps} />;

        case 'WpPage_Acf_Content_Findings':
          return <FindingsTeaser {...blockProps} />;
      }

      return null;
    })}

    <Constraint>
      <TwitterTimeline
        title="News"
        endpoint="/.netlify/functions/twitter-timeline"
      />
    </Constraint>
  </>
);

export const query = graphql`
  query($publicationsCount: Int, $wordpressId: Int) {
    page: wpPage(databaseId: { eq: $wordpressId }) {
      title
      acf {
        content {
          __typename

          ... on WpPage_Acf_Content_AboutTeaser {
            summary
            title
          }

          ... on WpPage_Acf_Content_FeaturedPublications {
            title
            summary
            image {
              caption
              localFile {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...Picture
                  }
                }
              }
            }
          }

          ... on WpPage_Acf_Content_Findings {
            title
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1200) {
                    ...Picture
                  }
                }
              }
            }
          }
        }
      }
    }

    publications: allWpPublication(
      filter: { acf: { featured: { eq: true } } }
      limit: $publicationsCount
      sort: { fields: acf___year, order: DESC }
    ) {
      nodes {
        ...publicationListItem
      }
    }
  }
`;

export default withLayout(Page);
