import Helmet from 'react-helmet';
import React from 'react';
import { graphql } from 'gatsby';

import Constraint from '../../components/constraint';
import MoreLinksList from '../../components/more-links-list';
import PublicationList from '../../components/publication-list';
import Richtext from '../../components/richtext';
import withLayout from '../../components/with-layout';

import style from './style';

const findPublicationById = (id, publications) =>
  publications.find(({ wordpress_id: wordpressId }) => wordpressId === id);

const Page = ({
  data: {
    publications: { nodes: publications },
    fact: {
      title,
      featuredImage,
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
    <Constraint wide>
      <style jsx>{style}</style>

      <Helmet title={title} />

      <header className="header">
        <h1 className="title">{title}</h1>

        <picture className="image">
          {featuredImage && featuredImage.localFile && (
            <>
              <source
                type="image/webp"
                srcSet={
                  featuredImage.localFile.childImageSharp.fluid.srcSetWebp
                }
              />

              <source
                type="image/png"
                srcSet={featuredImage.localFile.childImageSharp.fluid.srcSet}
              />

              <img
                src={featuredImage.localFile.childImageSharp.fluid.src}
                alt=""
                loading="lazy"
              />
            </>
          )}
        </picture>
      </header>

      <div className="body">
        <Constraint>
          <p className="intro">{intro}</p>

          {content &&
            content.map(({ __typename, ...block }) => {
              switch (__typename) {
                case 'WordPressAcf_text':
                  return <Richtext content={block.text} />;

                default:
                  return <p>Block not yet implemented</p>;
              }
            })}

          {additionalLinks && (
            <>
              <h3 className="section-headline">Further reading</h3>
              <MoreLinksList items={additionalLinks} />
            </>
          )}

          {additionalPublications && (
            <>
              <h3 className="section-headline">Related Publications</h3>
              <PublicationList publications={publicationListItems} />
            </>
          )}
        </Constraint>
      </div>
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
        caption
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
        }
      }
    }
  }
`;
