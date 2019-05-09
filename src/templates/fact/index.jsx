import Helmet from 'react-helmet';
import React from 'react';
import { graphql } from 'gatsby';

import Constraint from '../../components/constraint';
import PublicationList from '../../components/publication-list';
import withLayout from '../../components/with-layout';

const findPublicationById = (id, publications) =>
  publications.find(({ wordpress_id: wordpressId }) => wordpressId === id);

const Page = ({
  data: {
    publications: { nodes: publications },
    fact: {
      title,
      acf: {
        intro,
        content,
        additionalLinks,
        publications: additionalPublications
      }
    }
  }
}) => {
  const publicationListItems = additionalPublications.map(({ publicationId }) =>
    findPublicationById(publicationId, publications)
  );

  return (
    <Constraint>
      <Helmet title={title} />

      <h1>{title}</h1>

      <p>{intro}</p>

      {content &&
        content.map(({ __typename, ...block }) => {
          switch (__typename) {
            case 'WordPressAcf_text':
              return <div dangerouslySetInnerHTML={{ __html: block.text }} />;

            default:
              return <p>Block not yet implemented</p>;
          }
        })}

      {additionalLinks && (
        <>
          <h3>Additional Links</h3>
          <ul>
            {additionalLinks.map(({ link, linkText }) => (
              <li key={`additional-link-${link}`}>
                <a href={link}>{linkText || link}</a>
              </li>
            ))}
          </ul>
        </>
      )}

      {additionalPublications && (
        <>
          <h3>Publications</h3>
          <PublicationList publications={publicationListItems} />
        </>
      )}
    </Constraint>
  );
};

export default withLayout(Page);

export const query = graphql`
  query($wordpressId: Int) {
    publications: allWordpressWpPublications {
      nodes {
        ...publicationListItem
      }
    }

    fact: wordpressWpCoalPhaseOut(wordpress_id: { eq: $wordpressId }) {
      title
      featuredImage: featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 600) {
              src
              srcSet
            }
          }
        }
      }
      acf {
        intro
        additionalLinks: additional_links {
          link
          linktext
        }
        publications {
          publicationId: publication
        }
        content: content_coal_phase_out {
          __typename

          ... on WordPressAcf_text {
            text
          }

          ... on WordPressAcf_image {
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 600) {
                    src
                    srcSet
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
