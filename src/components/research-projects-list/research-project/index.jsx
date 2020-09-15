/* eslint-disable jsx-a11y/control-has-associated-label */

import React from 'react';

import ArrowRightIcon from '../../../../static/icons/arrow-alt-right.svg';
import Button from '../../button';
import style, { buttonIcon } from './style';

export default ({
  title,
  acf: { start, end, summary, externalLink, acronym },
  tags,
}) => {
  let range = `${start}`;
  let hasCorrespondingTag = false;

  if (end && start !== end) {
    range += ` – ${end === 'Invalid date' ? 'Ongoing' : end}`;
  }

  if (
    acronym &&
    tags &&
    tags.find(({ name: tagName }) => acronym === tagName)
  ) {
    hasCorrespondingTag = true;
  }

  return (
    <div className="project">
      <style jsx>{style}</style>
      {buttonIcon.styles}

      <div className="duration-container">
        <p className="duration">{range}</p>
      </div>

      <h3 className="title-container">
        <a
          href={externalLink}
          className="title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </h3>

      <div className="content-container">
        <div
          dangerouslySetInnerHTML={{ __html: summary }}
          className="summary"
        />

        {hasCorrespondingTag && (
          <Button to={`/publications/?keywords=${acronym}`} theme="blue">
            Publications
            <ArrowRightIcon className={buttonIcon.className} />
          </Button>
        )}
      </div>
    </div>
  );
};
