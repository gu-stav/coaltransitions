import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import React from 'react';

import Constraint from '../../components/constraint';
import Intro from '../../components/intro';
import Newsletter from '../../components/Newsletter';
import Picture from '../../components/picture';
import ResearchProjectsList from '../../components/research-projects-list';
import Richtext from '../../components/richtext';
import withLayout from '../../components/with-layout';

import style, { picture as pictureStyle } from './style';

const Page = ({
  data: {
    page: {
      title,
      acf: { intro, content },
    },
  },
}) => (
  <>
    <style jsx>{style}</style>
    {pictureStyle.styles}

    <Helmet title={title} />

    <article>
      <Constraint topLevel>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />

        {intro && <Intro intro={intro} />}

        {content &&
          content.map((block) => {
            const { __typename: type } = block;

            // eslint-disable-next-line default-case
            switch (type) {
              case 'WpPage_Acf_Content_Text':
                return <Richtext content={block.text} />;

              case 'WpPage_Acf_Content_Image':
                return (
                  <figure className={pictureStyle.className}>
                    <Picture
                      image={block.image.localFile}
                      caption={block.image.caption}
                    />
                  </figure>
                );

              case 'WpPage_Acf_Content_Researchprojects':
                return <ResearchProjectsList />;

              case 'WpPage_Acf_Content_Newsletter':
                return <Newsletter {...block} />;
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
    page: wpPage(databaseId: { eq: $wordpressId }) {
      title
      acf {
        intro
        content {
          __typename

          ... on WpPage_Acf_Content_Text {
            text
          }

          ... on WpPage_Acf_Content_Image {
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

          ... on WpPage_Acf_Content_Researchprojects {
            showresearchprojects
          }

          ... on WpPage_Acf_Content_Newsletter {
            ...Newsletter
          }

          ... on WpPage_Acf_Content_Logogrid {
            ...LogoGrid
          }
        }
      }
    }
  }
`;
