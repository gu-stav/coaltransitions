export const containsAllTags = (publication, tagsList) => {
  if (!tagsList || tagsList.length === 0) {
    return true;
  }

  return tagsList.reduce((acc, slug) => {
    const tags = publication?.terms?.nodes || [];

    if (tags.find(({ slug: tagSlug }) => tagSlug === slug) === undefined) {
      // eslint-disable-next-line no-param-reassign
      acc = false;
    }

    return acc;
  }, true);
};

export const extractTags = (news) => {
  const tags = news.reduce((acc, { newsTags: terms }) => {
    if (terms?.nodes) {
      terms.nodes.forEach(({ slug, name }) => {
        acc[slug] = name;
      });
    }

    return acc;
  }, {});

  return Object.entries(tags).map(([value, label]) => ({ value, label }));
};

export const filterNews = (news, { tags }) =>
  news.reduce((acc, entry) => {
    if (containsAllTags(entry, tags) === true) {
      acc.push(entry);
    }

    return acc;
  }, []);
