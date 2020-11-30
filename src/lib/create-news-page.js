const path = require('path');

const fetchNews = (graphql) =>
  graphql(`
    {
      allWpNewsEntry(filter: { status: { eq: "publish" } }) {
        nodes {
          databaseId
          uri
        }
      }
    }
  `);

const createWpNewsEntry = (
  { allWpNewsEntry: { nodes: news } },
  { createPage }
) => {
  news.forEach(({ databaseId, uri }) => {
    const template = 'news/index';

    const context = {
      databaseId,
    };

    // eslint-disable-next-line no-console
    console.log(`Create News: ${uri}`);

    createPage({
      path: uri,
      component: path.resolve(`src/templates/${template}.jsx`),
      context,
    });
  });
};

const createWpNews = (graphql, actions) =>
  fetchNews(graphql).then(({ data }) => createWpNewsEntry(data, actions));

module.exports = {
  createWpNews,
};
