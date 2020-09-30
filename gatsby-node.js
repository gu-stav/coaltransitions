const { createFindingPages } = require('./src/lib/create-finding-page');
const { createWpNews } = require('./src/lib/create-news-page');
const { createPublicationPages } = require('./src/lib/create-publication-page');
const { createPages } = require('./src/lib/create-page');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return Promise.all([
    createPublicationPages(graphql, createPage),
    createFindingPages(graphql, createPage),
    createWpNews(graphql, actions),
    createPages(graphql, actions),
  ]);
};
