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
      acf: { content_page: blocks },
    },
    publications: { nodes: publications },
  },
}) => (
  <>
    <Helmet title={title} />

    {blocks.map(({ __typename: typename, ...blockProps }) => {
      // eslint-disable-next-line default-case
      switch (typename) {
        case 'WordPressAcf_featured_publications':
          return (
            <PublicationsTeaser publications={publications} {...blockProps} />
          );

        case 'WordPressAcf_about_teaser':
          return <AboutTeaser {...blockProps} />;

        case 'WordPressAcf_findings':
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
    page: wordpressPage(wordpress_id: { eq: $wordpressId }) {
      title
      acf {
        content_page {
          __typename

          ... on WordPressAcf_about_teaser {
            summary
            title
          }

          ... on WordPressAcf_featured_publications {
            title
            summary
            image {
              caption
              localFile {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    src
                    srcSet
                    srcSetWebp
                  }
                }
              }
            }
          }

          ... on WordPressAcf_findings {
            title
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1200) {
                    src
                    srcSet
                    srcSetWebp
                  }
                }
              }
            }
          }
        }
      }
    }

    publications: allWordpressWpPublications(
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
