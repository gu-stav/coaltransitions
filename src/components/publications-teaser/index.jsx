import React from 'react';

import Intro from '../intro';
import Picture from '../picture';
import PublicationList from '../publication-list';
import style from './style';

export default ({ title, summary, image, publications }) => (
  <section>
    <style jsx>{style}</style>

    <h2 className="title">{title}</h2>

    <Picture image={image.localFile} />

    <Intro intro={summary} />

    <PublicationList
      publications={publications}
      title={`Featured Publications (${publications.length})`}
    />
  </section>
);
