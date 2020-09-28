import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
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
    subMenuItems,
    page: {
      title,
      acf: { content, intro },
    },
  },
}) => (
  <>
    <Helmet title={title} />

    <SubMenu {...subMenuItems} />

    <article>
      <style jsx>{style}</style>
      {aboutPicture.styles}

      <Constraint topLevel>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />

        {intro && <Intro intro={intro} />}

        {content &&
          content.map((block) => {
            const { __typename: type } = block;

            switch (type) {
              case 'WpAboutPage_Acf_Content_Text':
                return <Richtext content={block.text} />;

              case 'WpAboutPage_Acf_Content_Image':
                return (
                  <figure className={aboutPicture.className}>
                    <Picture
                      image={block.image.localFile}
                      caption={block.image.caption}
                    />
                  </figure>
                );

              case 'WpAboutPage_Acf_Content_Researchprojects':
                return <ResearchProjectsList />;

              case 'WpAboutPage_Acf_Content_Researchers':
                return <ResearchersList />;

              case 'WpAboutPage_Acf_Content_Partner':
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
    subMenuItems: allWpAboutPage(sort: { fields: acf___sort, order: ASC }) {
      ...SubMenuAbout
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
                    ...Picture
                  }
                }
              }
              caption
            }
          }

          ... on WpAboutPage_Acf_Content_Researchers {
            showresearchers
          }

          ... on WpAboutPage_Acf_Content_Partner {
            ...PartnerAbout
          }
        }
      }
    }
  }
`;
