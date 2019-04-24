import { useEffect } from 'react';
import { setUrlForFilter } from '../../../lib/url';

export default ({ state, minPublicationYear, maxPublicationYear }) => {
  useEffect(() => {
    setUrlForFilter('authors', state.authors);
    setUrlForFilter('keywords', state.tags);

    // Only set the URL parameter, if the start and beginning are different
    // than the default
    if (state.range !== null) {
      if (
        state.range[0] !== minPublicationYear ||
        state.range[1] !== maxPublicationYear
      ) {
        setUrlForFilter('range', state.range);
      }
    } else {
      setUrlForFilter('range', null);
    }
  }, [state]);

  return null;
};
