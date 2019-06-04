const path = require('path');

const fetchPages = graphql =>
  graphql(`
    {
      pages: allWordpressPage {
        nodes {
          slug
          wordpress_id
          acf {
            frontpage

            content_page {
              __typename
              ... on WordPressAcf_featured_publications {
                show_count
              }
            }
          }
        }
      }
    }
  `);

const createPages = (data, createPage) => {
  const {
    pages: { nodes: pages }
  } = data;

  pages.forEach(
    ({
      slug,
      wordpress_id: wordpressId,
      acf: { frontpage = false, content_page: blocks }
    }) => {
      let pagePath = `/${slug}/`;
      let template = 'page/index';
      const context = {
        wordpressId
      };

      if (frontpage === true) {
        pagePath = '/';
        template = 'frontpage/index';

        const showCount = blocks.find(
          ({ __typename: typename }) =>
            typename === 'WordPressAcf_featured_publications'
        ).show_count;

        context.publicationsCount = parseInt(showCount || 5, 10);
      }

      // eslint-disable-next-line no-console
      console.log('Create page:', template, pagePath, context);

      createPage({
        path: pagePath,
        component: path.resolve(`src/templates/${template}.jsx`),
        context
      });
    }
  );
};

const createWpPages = (graphql, createPage) =>
  fetchPages(graphql).then(({ data }) => createPages(data, createPage));

module.exports = {
  createPages: createWpPages
};
