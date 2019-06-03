import { graphql } from 'gatsby';
import React from 'react';

import Constraint from '../../components/constraint';
import Intro from '../../components/intro';
import Picture from '../../components/picture';
import ResearchProjectsList from '../../components/research-projects-list';
import Richtext from '../../components/richtext';
import style from './style';
import SubMenu from '../../components/sub-menu';
import withLayout from '../../components/with-layout';

const Page = ({
  data: {
    pages: { nodes: pages },
    researchProjects: { nodes: researchProjects },
    page: {
      title,
      acf: { content, intro }
    }
  }
}) => (
  <>
    <SubMenu items={pages} />
    <article>
      <style jsx>{style}</style>

      <Constraint topLevel>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />

        <Intro intro={intro} />

        {content &&
          content.map(block => {
            const { __typename: type } = block;

            // eslint-disable-next-line default-case
            switch (type) {
              case 'WordPressAcf_text':
                return <Richtext content={block.text} />;

              case 'WordPressAcf_image':
                return <Picture image={block.image.localFile} />;

              case 'WordPressAcf_researchProjects':
                return <ResearchProjectsList items={researchProjects} />;
            }

            return null;
          })}
      </Constraint>
    </article>
  </>
);

export default withLayout(Page);

export const query = graphql`
  query($wordpressId: Int) {
    pages: allWordpressWpAbout {
      nodes {
        title
        slug
      }
    }

    researchers: allWordpressWpResearchers {
      nodes {
        title
        acf {
          background
          email
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 400) {
                  src
                  srcSet
                  srcSetWebp
                }
              }
            }
          }
          part_of_coalexit_group
          phone
          topics
        }
      }
    }

    researchProjects: allWordpressWpResearchprojects {
      nodes {
        title
        acf {
          acronym
          end(formatString: "YYYY")
          externalLink: external_link
          start(formatString: "YYYY")
          summary
        }
      }
    }

    page: wordpressWpAbout(wordpress_id: { eq: $wordpressId }) {
      title
      acf {
        intro
        content: content_about {
          __typename

          ... on WordPressAcf_text {
            text
          }

          ... on WordPressAcf_image {
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    src
                    srcSet
                    srcWebp
                  }
                }
              }
            }
          }

          ... on WordPressAcf_researchProjects {
            showResearchProjects
          }

          ... on WordPressAcf_researchers {
            showResearchers
          }
        }
      }
    }
  }
`;
