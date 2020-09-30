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
  },
}) => (
  <>
    <Helmet title={title} />

    {blocks.map(({ __typename: typename, ...block }, index) => {
      const key = `block-${index}`;

      // eslint-disable-next-line default-case
      switch (typename) {
        case 'WpPage_Acf_Content_FeaturedPublications':
          return <PublicationsTeaser key={key} {...block} />;

        case 'WpPage_Acf_Content_AboutTeaser':
          return <AboutTeaser key={key} {...block} />;

        case 'WpPage_Acf_Content_Findings':
          return <FindingsTeaser key={key} {...block} />;
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
  query($databaseId: Int) {
    page: wpPage(databaseId: { eq: $databaseId }) {
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

            publications {
              ... on WpPublication {
                ...publicationListItem
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
  }
`;

export default withLayout(Page);
