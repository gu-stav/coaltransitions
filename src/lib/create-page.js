const path = require('path');

const fetchPages = graphql =>
  graphql(`
    {
      pages: allWpPage {
        nodes {
          slug
          databaseId
          isFrontPage
        }
      }
    }
  `);

const createPages = (data, createPage) => {
  const {
    pages: { nodes: pages }
  } = data;

  pages.forEach(({ slug, databaseId: wordpressId, isFrontPage }) => {
    let pagePath = `/${slug}/`;
    let template = 'page/index';
    const context = {
      wordpressId
    };

    if (isFrontPage === true) {
      pagePath = '/';
      template = 'frontpage/index';
    }

    // eslint-disable-next-line no-console
    console.log('Create page:', pagePath);

    createPage({
      path: pagePath,
      component: path.resolve(`src/templates/${template}.jsx`),
      context
    });
  });
};

const createWpPages = (graphql, createPage) =>
  fetchPages(graphql).then(({ data }) => createPages(data, createPage));

module.exports = {
  createPages: createWpPages
};
