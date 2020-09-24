const path = require('path');

const fetchPages = graphql =>
  graphql(`
    {
      pages: allWordpressWpAbout {
        nodes {
          slug
          wordpress_id
          title
        }
      }
    }
  `);

const createPages = (data, createPage) => {
  const {
    pages: { nodes: pages }
  } = data;

  pages.forEach(({ slug, wordpress_id: wordpressId }) => {
    let pagePath = `/about/${slug}/`;

    // default about page
    if (slug === 'research-hub') {
      pagePath = '/about/';
    }

    // eslint-disable-next-line no-console
    console.log('Create about:', pagePath);

    createPage({
      path: pagePath,
      component: path.resolve('src/templates/about/index.jsx'),
      context: {
        wordpressId
      }
    });
  });
};

const createAboutPages = (graphql, createPage) =>
  fetchPages(graphql).then(({ data }) => createPages(data, createPage));

module.exports = {
  createAboutPages
};
