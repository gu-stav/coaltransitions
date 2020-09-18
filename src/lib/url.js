const DIVIDER = ',';

export const setUrlForFilter = (name, value) => {
  const newValue = value && value.join(DIVIDER);
  const url = new URL(window.location.href);

  if (newValue) {
    url.searchParams.set(name, newValue);
  } else {
    url.searchParams.delete(name);
  }

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

  return value.split(DIVIDER).map(mappingFunction);
};
