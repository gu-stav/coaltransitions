import { graphql } from 'gatsby';
import React from 'react';

import Constraint from '../../components/constraint';
import Richtext from '../../components/richtext';
import SubMenu from '../../components/sub-menu';
import withLayout from '../../components/with-layout';

const Page = ({
  data: {
    pages: { nodes: pages },
    page: {
      title,
      acf: { content }
    }
  }
}) => (
  <>
    <SubMenu items={pages} />

    <Constraint>
      <h1 dangerouslySetInnerHTML={{ __html: title }} />

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

    page: wordpressWpAbout(wordpress_id: { eq: $wordpressId }) {
      title
      acf {
        content: content_about {
          __typename

          ... on WordPressAcf_text {
            text
          }
        }
      }
    }
  }
`;
