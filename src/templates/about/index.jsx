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
    tags: { nodes: tags },
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
                  <figure className={aboutPicture.className}>
                    <Picture
                      image={block.image.localFile}
                      caption={block.image.caption}
                    />
                  </figure>
                );

              case 'WordPressAcf_researchProjects':
                return (
                  <ResearchProjectsList items={researchProjects} tags={tags} />
                );

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
    pages: allWpAboutPage(sort: { fields: acf___sort, order: ASC }) {
      nodes {
        title
        slug
        acf {
          shorttitle
        }
      }
    }

    researchers: allWpResearcher {
      nodes {
        title
        acf {
          affiliation
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
          partOfCoalexitGroup
          phone
          pinToTop
          topics
        }
      }
    }

    tags: allWpTag {
      nodes {
        name
        slug
      }
    }

    researchProjects: allWpResearchProject(
      sort: { fields: acf___start, order: DESC }
    ) {
      nodes {
        title
        acf {
          acronym
          end
          externalLink
          start
          summary
        }
      }
    }

    page: wpAboutPage(databaseId: { eq: $wordpressId }) {
      title
      acf {
        intro
        content {
          __typename

          ... on WpAboutPage_Acf_Content_Text {
            text
          }

          ... on WpAboutPage_Acf_Content_Image {
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
              caption
            }
          }

          ... on WpAboutPage_Acf_Content_Researchprojects {
            showresearchprojects
          }

          ... on WpAboutPage_Acf_Content_Researchers {
            showresearchers
          }

          ... on WpAboutPage_Acf_Content_Partner {
            ...partner
          }
        }
      }
    }
  }
`;
