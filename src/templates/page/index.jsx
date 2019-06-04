import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import React from 'react';

import Constraint from '../../components/constraint';
import Intro from '../../components/intro';
import Richtext from '../../components/richtext';
import style from './style';
import withLayout from '../../components/with-layout';

const Page = ({
  data: {
    page: {
      title,
      acf: { content, intro }
    }
  }
}) => (
  <>
    <style jsx>{style}</style>

    <Helmet title={title} />

    <article>
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
    page: wordpressPage(wordpress_id: { eq: $wordpressId }) {
      title
      acf {
        content: content_page {
          __typename

          ... on WordPressAcf_text {
            text
          }
        }
      }
    }
  }
`;
