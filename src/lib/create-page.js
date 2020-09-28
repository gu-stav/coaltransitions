const path = require('path');

const fetchPages = (graphql) =>
  graphql(`
    {
      pages: allWpPage {
        nodes {
          databaseId
          isFrontPage
          uri

          wpChildren {
            nodes {
              uri
            }
          }
        }
      }
    }
  `);

const createPages = (data, { createPage, createRedirect }) => {
  const {
    pages: { nodes: pages },
  } = data;

  pages.forEach(({ uri, databaseId: wordpressId, isFrontPage, wpChildren }) => {
    const template = isFrontPage ? 'frontpage/index' : 'page/index';

    const context = {
      wordpressId,
    };

    if (wpChildren?.nodes.length === 0) {
      // eslint-disable-next-line no-console
      console.log('Create page:', uri);

      createPage({
        path: uri,
        component: path.resolve(`src/templates/${template}.jsx`),
        context,
      });
    } else {
      const toPath = wpChildren.nodes[0].uri;

      // eslint-disable-next-line no-console
      console.log(`Create redirect: ${uri} -> ${toPath}`);

      createRedirect({
        fromPath: uri,
        toPath,
        isPermanent: true,
      });
    }
  });
};

const createWpPages = (graphql, actions) =>
  fetchPages(graphql).then(({ data }) => createPages(data, actions));

module.exports = {
  createPages: createWpPages,
};
