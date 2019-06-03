import React from 'react';

import Picture from '../picture';
import PublicationList from '../publication-list';

export default ({ title, summary, image, publications }) => (
  <section>
    <h2>{title}</h2>

    <Picture image={image.localFile} />

    {summary}

    <PublicationList
      publications={publications}
      title={`Featured Publications (${publications.length})`}
    />
  </section>
);
