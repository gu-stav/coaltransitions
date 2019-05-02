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

    if (publicationTags) {
      publicationTags.forEach(({ slug, name }) => {
        acc[slug] = name;
      });
    }

    return acc;
  }, {});

  return Object.entries(tags).map(([value, label]) => ({ value, label }));
};

export const publicationContainsAllTags = (publication, tags) =>
  tags && tags.length > 0
    ? tags.reduce((acc, slug) => {
        const { tags: publicationTags } = publication;

        if (
          publicationTags &&
          publicationTags.find(({ slug: tagSlug }) => {
            return tagSlug === slug;
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

export const extractPublicationYearExtremes = publications => {
  let min;
  let max;

  publications.forEach(({ acf: { year } }, index) => {
    if (index === 0) {
      min = year;
      max = year;
    } else {
      if (year > max) {
        max = year;
      }

      if (year < min) {
        min = year;
      }
    }
  });

  return [parseInt(min, 10), parseInt(max, 10)];
};

export const publicationInTimeRange = ({ acf: { year } }, range) => {
  if (!range) {
    return true;
  }

  const [min, max] = range;

  return year >= min && year <= max;
};

export const filterPublications = (publications, { authors, tags, range }) =>
  publications.reduce((acc, publication) => {
    if (
      publicationContainsAllTags(publication, tags) === true &&
      publicationContainsAllAuthors(publication, authors) === true &&
      publicationInTimeRange(publication, range)
    ) {
      acc.push(publication);
    }

    return acc;
  }, []);
