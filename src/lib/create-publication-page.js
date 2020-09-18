const path = require('path');

const fetchPublications = (graphql) =>
  graphql(`
    {
      publications: allWordpressWpPublications {
        nodes {
          slug
          wordpress_id
        }
      }
    }
  `);

const createPages = (data, createPage) => {
  const {
    publications: { nodes: publications },
  } = data;

  publications.forEach(({ slug, wordpress_id: wordpressId }) => {
    const pagePath = `/publications/${slug}/`;

    // eslint-disable-next-line no-console
    console.log('Create publication:', pagePath);

    createPage({
      path: pagePath,
      component: path.resolve('src/templates/publication/index.jsx'),
      context: {
        wordpressId,
      },
    });
  });
};

const createPublicationPages = (graphql, createPage) =>
  fetchPublications(graphql).then(({ data }) => createPages(data, createPage));

module.exports = {
  createPublicationPages,
};
