export const setUrlForFilter = (name, value) => {
  const newValue = value.join(';');
  const url = new URL(window.location.href);

  url.searchParams.set(name, newValue);

  window.history.pushState('', '', url);
};

export const getFilterFromUrl = (name, mappingFunction = val => val) => {
  if (typeof window === 'undefined') {
    return [];
  }

  const url = new URL(window.location.href);
  const value = url.searchParams.get(name);

  if (!value) {
    return null;
  }

  return value.split(';').map(mappingFunction);
};
