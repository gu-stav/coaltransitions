import React from 'react';

import Constraint from '../constraint';
import Intro from '../intro';
import Picture from '../picture';
import PublicationList from '../publication-list';
import style from './style';

export default ({ title, summary, image, publications }) => (
  <section>
    <style jsx>{style}</style>

    <Constraint wide>
      <div className="content-container">
        <Picture image={image.localFile} />

        <div className="intro-container">
          <h2 className="title">{title}</h2>
          <Intro intro={summary} />
        </div>
      </div>

      <PublicationList
        publications={publications}
        title="Featured Publications"
        showAllLink
      />
    </Constraint>
  </section>
);
