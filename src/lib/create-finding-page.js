const path = require('path');

const fetchFindings = (graphql) =>
  graphql(`
    {
      findings: allWpFinding {
        nodes {
          slug
          databaseId

          acf {
            publications {
              publication {
                ... on WpPublication {
                  databaseId
                }
              }
            }
          }
        }
      }
    }
  `);

const createPages = (data, createPage) => {
  const {
    findings: { nodes: findings },
  } = data;

  findings.forEach(({ slug, databaseId, acf: { publications } }) => {
    const pagePath = `/findings/${slug}/`;
    const context = {
      relatedPublications: [-1],
      databaseId,
    };

    if (publications && publications.length > 0) {
      context.relatedPublications = publications.map(
        ({ publication: { databaseId: publicationDatabaseId } }) =>
          publicationDatabaseId
      );
    }

    // eslint-disable-next-line no-console
    console.log('Create finding:', pagePath);

    createPage({
      path: pagePath,
      component: path.resolve('src/templates/finding/index.jsx'),
      context,
    });
  });
};

const createFindingPages = (graphql, createPage) =>
  fetchFindings(graphql).then(({ data }) => createPages(data, createPage));

module.exports = {
  createFindingPages,
};
