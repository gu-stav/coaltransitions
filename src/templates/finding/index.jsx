import { Helmet } from 'react-helmet';
import React from 'react';
import { graphql } from 'gatsby';

import Constraint from '../../components/constraint';
import Intro from '../../components/intro';
import MoreLinksList from '../../components/more-links-list';
import Picture from '../../components/picture';
import PublicationList from '../../components/publication-list';
import Richtext from '../../components/richtext';
import withLayout from '../../components/with-layout';

import style, { pictureStyle } from './style';

const findPublicationById = (id, publications) =>
  publications.find(({ wordpress_id: wordpressId }) => wordpressId === id);

const Page = ({
  data: {
    publications: { nodes: publications },
    finding: {
      title,
      featuredImage,
      acf: {
        intro,
        content,
        additionalLinks = [],
        publications: additionalPublications = [],
      },
    },
  },
}) => {
  const publicationListItems = Array.isArray(additionalPublications)
    ? additionalPublications.map(
        ({ publication: { databaseId: publicationId } }) =>
          findPublicationById(publicationId, publications)
      )
    : [];

  return (
    <>
      <style jsx>{style}</style>
      {pictureStyle.style}

      <Helmet title={title} />

      <header className="header">
        <h1 className="title" dangerouslySetInnerHTML={{ __html: title }} />

        {featuredImage?.node?.localFile && (
          <Picture
            image={featuredImage.node.localFile}
            caption={featuredImage?.node?.caption}
          />
        )}
      </header>

      <Constraint topLevel>
        <div className="body">
          <Intro intro={intro} />

          {content && (
            <div className="description">
              {content.map(({ __typename, ...block }) => {
                switch (__typename) {
                  case 'WpFinding_Acf_Content_Text':
                    return <Richtext content={block.text} />;

                  case 'WpFinding_Acf_Content_Image':
                    return (
                      <figure className={pictureStyle.className}>
                        <Picture
                          image={block.image.localFile}
                          caption={block.image.caption}
                        />
                      </figure>
                    );

                  default:
                    return <p>Block not implemented</p>;
                }
              })}
            </div>
          )}

          {additionalLinks && additionalLinks.length > 0 && (
            <div className="additional-links-container">
              <h3 className="section-headline">Further reading</h3>
              <MoreLinksList items={additionalLinks} />
            </div>
          )}

          {publicationListItems && publicationListItems.length > 0 && (
            <div className="publications-list-contaioner">
              <PublicationList
                publications={publicationListItems}
                title="Related Publications"
              />
            </div>
          )}
        </div>
      </Constraint>
    </>
  );
};

export default withLayout(Page);

export const query = graphql`
  query($wordpressId: Int) {
    publications: allWpPublication {
      nodes {
        ...publicationListItem
      }
    }

    finding: wpFinding(databaseId: { eq: $wordpressId }) {
      title
      featuredImage {
        node {
          caption
          localFile {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...Picture
              }
            }
          }
        }
      }

      acf {
        intro
        additionalLinks {
          link
          linktext
        }
        publications {
          publication {
            ... on WpPublication {
              databaseId
            }
          }
        }
        content {
          __typename

          ... on WpFinding_Acf_Content_Text {
            text
          }

          ... on WpFinding_Acf_Content_Image {
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...Picture
                  }
                }
              }
              caption
            }
          }
        }
      }
    }
  }
`;
