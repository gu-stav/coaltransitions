const { createPublicationPages } = require('./src/lib/create-publication-page');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return createPublicationPages(graphql, createPage);
};
