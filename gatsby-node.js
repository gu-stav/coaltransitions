const { createAboutPages } = require('./src/lib/create-about-page');
const { createFindingPages } = require('./src/lib/create-finding-page');
const { createPublicationPages } = require('./src/lib/create-publication-page');
const { createPages } = require('./src/lib/create-page');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return Promise.all([
    createPublicationPages(graphql, createPage),
    createFindingPages(graphql, createPage),
    createAboutPages(graphql, createPage),
    createPages(graphql, createPage)
  ]);
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

  if (
    (node.internal.type === 'wordpress__acf_findings' ||
      node.internal.type === 'wordpress__wp_findings') &&
    node.acf.additional_links === false
  ) {
    // eslint-disable-next-line no-param-reassign
    node.acf.additional_links = [];
  }
};
