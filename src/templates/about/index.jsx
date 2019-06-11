import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import React from 'react';

import Constraint from '../../components/constraint';
import Intro from '../../components/intro';
import Partner from '../../components/partner';
import Picture from '../../components/picture';
import ResearchersList from '../../components/researchers-list';
import ResearchProjectsList from '../../components/research-projects-list';
import Richtext from '../../components/richtext';
import style, { aboutPicture } from './style';
import SubMenu from '../../components/sub-menu';
import withLayout from '../../components/with-layout';

const Page = ({
  data: {
    pages: { nodes: pages },
    researchers: { nodes: researchers },
    researchProjects: { nodes: researchProjects },
    page: {
      title,
      acf: { content, intro }
    }
  }
}) => (
  <>
    <Helmet title={title} />

    <SubMenu items={pages} />

    <article>
      <style jsx>{style}</style>
      {aboutPicture.styles}

      <Constraint topLevel>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />

        <Intro intro={intro} />

        {content &&
          content.map(block => {
            const { __typename: type } = block;

            switch (type) {
              case 'WordPressAcf_text':
                return <Richtext content={block.text} />;

              case 'WordPressAcf_image':
                return (
                  <Picture
                    image={block.image.localFile}
                    className={aboutPicture.className}
                  />
                );

              case 'WordPressAcf_researchProjects':
                return <ResearchProjectsList items={researchProjects} />;

              case 'WordPressAcf_researchers':
                return <ResearchersList items={researchers} />;

              case 'WordPressAcf_partner':
                return <Partner {...block} />;

              default:
                return <div>{JSON.stringify(block)}</div>;
            }
          })}
      </Constraint>
    </article>
  </>
);

export default withLayout(Page);

export const query = graphql`
  query($wordpressId: Int) {
    pages: allWordpressWpAbout(sort: { fields: acf___sort, order: ASC }) {
      nodes {
        title
        slug
        acf {
          shorttitle
        }
      }
    }

    researchers: allWordpressWpResearchers(sort: { fields: title }) {
      nodes {
        title
        acf {
          background
          email
          image {
            localFile {
              childImageSharp {
                fixed(height: 400, width: 400) {
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

    researchProjects: allWordpressWpResearchprojects(
      sort: { fields: acf___start, order: DESC }
    ) {
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

          ... on WordPressAcf_partner {
            ...partner
          }
        }
      }
    }
  }
`;
