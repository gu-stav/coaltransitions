export const extractPublicationsAuthors = publications => {
  const authors = publications.reduce((acc, publication) => {
    const {
      acf: { author: publicationAuthors }
    } = publication;

    publicationAuthors.forEach(({ name }) => {
      acc.add(name);
    });

    return acc;
  }, new Set());

  return Array.from(authors.entries(), ([author]) => {
    return {
      value: author,
      label: author
    };
  });
};

export const extractPublicationsTags = publications => {
  const tags = publications.reduce((acc, publication) => {
    const { tags: publicationTags } = publication;

    publicationTags.forEach(({ name }) => {
      acc.add(name);
    });

    return acc;
  }, new Set());

  return Array.from(tags.entries(), ([tag]) => {
    return {
      value: tag,
      label: tag
    };
  });
};

export const publicationContainsAllTags = (publication, tags) =>
  tags && tags.length > 0
    ? tags.reduce((acc, tag) => {
        const { tags: publicationTags } = publication;

        if (
          publicationTags.find(({ name: tagName }) => {
            return tagName === tag;
          }) === undefined
        ) {
          // eslint-disable-next-line no-param-reassign
          acc = false;
        }

        return acc;
      }, true)
    : true;

export const publicationContainsAllAuthors = (publication, authors) =>
  authors && authors.length > 0
    ? authors.reduce((acc, author) => {
        const {
          acf: { author: publicationAuthors }
        } = publication;

        if (
          publicationAuthors.find(({ name: authorName }) => {
            return authorName === author;
          }) === undefined
        ) {
          // eslint-disable-next-line no-param-reassign
          acc = false;
        }

        return acc;
      }, true)
    : true;
