const { createPublicationPages } = require('./src/lib/create-publication-page');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return createPublicationPages(graphql, createPage);
};

exports.onCreateNode = ({ node }) => {
  if (
    (node.internal.type === 'wordpress__acf_publications' ||
      node.internal.type === 'wordpress__wp_publications') &&
    node.acf.institute === false
  ) {
    // eslint-disable-next-line no-param-reassign
    node.acf.institute = [];
  }

  if (
    (node.internal.type === 'wordpress__acf_publications' ||
      node.internal.type === 'wordpress__wp_publications') &&
    node.acf.author === false
  ) {
    // eslint-disable-next-line no-param-reassign
    node.acf.author = [];
  }

  if (
    node.internal.type === 'wordpress__acf_publications' ||
    node.internal.type === 'wordpress__wp_publications'
  ) {
    node.acf.language.forEach(language => {
      if (language.file === false) {
        // eslint-disable-next-line no-param-reassign
        language.file = {};
      }
    });
  }
};
