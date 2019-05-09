const path = require('path');

const fetchFacts = graphql =>
  graphql(`
    {
      facts: allWordpressWpCoalPhaseOut {
        nodes {
          slug
          wordpress_id
        }
      }
    }
  `);

const createPages = (data, createPage) => {
  const {
    facts: { nodes: facts }
  } = data;

  facts.forEach(({ slug, wordpress_id: wordpressId }) => {
    const pagePath = `/coal-phase-out/${slug}/`;

    // eslint-disable-next-line no-console
    console.log('Create fact:', pagePath);

    createPage({
      path: pagePath,
      component: path.resolve('src/templates/fact/index.jsx'),
      context: {
        wordpressId
      }
    });
  });
};

const createCoalPhaseOutPages = (graphql, createPage) =>
  fetchFacts(graphql).then(({ data }) => createPages(data, createPage));

module.exports = {
  createCoalPhaseOutPages
};
