const path = require('path');

const sortByMenuOrder = (nodeA, nodeB) => {
  const { menuOrder: menuOrderA } = nodeA;
  const { menuOrder: menuOrderB } = nodeB;

  if (menuOrderA < menuOrderB) {
    return -1;
  }

  if (menuOrderA > menuOrderB) {
    return 1;
  }

  return 0;
};

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
              ... on WpPage {
                menuOrder
                uri
              }
            }
          }

          siblings: wpParent {
            node {
              ... on WpPage {
                wpChildren {
                  nodes {
                    ... on WpPage {
                      menuOrder
                      databaseId
                      uri
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

const createPages = (
  { pages: { nodes: pages } },
  { createPage, createRedirect }
) => {
  pages.forEach(({ uri, databaseId, isFrontPage, wpChildren, siblings }) => {
    const template = isFrontPage ? 'frontpage/index' : 'page/index';
    const pageHasChildren = wpChildren.nodes.length !== 0;

    const context = {
      siblings: [],
      databaseId,
    };

    if (
      siblings &&
      siblings.node &&
      siblings.node.wpChildren &&
      siblings.node.wpChildren.nodes.length > 0
    ) {
      context.siblings = siblings.node.wpChildren.nodes
        .sort(sortByMenuOrder)
        .map(({ databaseId: siblingDatabaseId }) => siblingDatabaseId);
    }

    if (!pageHasChildren) {
      // eslint-disable-next-line no-console
      console.log('Create page:', uri);

      createPage({
        path: uri,
        component: path.resolve(`src/templates/${template}.jsx`),
        context,
      });
    } else {
      // create a link to the first child page
      const toPath = wpChildren.nodes.sort(sortByMenuOrder)[0].uri;

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
