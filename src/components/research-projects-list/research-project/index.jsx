import React from 'react';

import ArrowRightIcon from '../../../../static/icons/arrow-alt-right.svg';
import Button from '../../button';
import style, { buttonIcon } from './style';

export default ({ title, acf: { start, end, summary, externalLink } }) => (
  <div className="project">
    <style jsx>{style}</style>
    {buttonIcon.styles}

    <div className="duration-container">
      <p className="duration">
        {start} – {end}
      </p>
    </div>

    <h3 className="title-container">
      <a
        href={externalLink}
        className="title"
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </h3>

    <div className="content-container">
      <div dangerouslySetInnerHTML={{ __html: summary }} className="summary" />

      <Button to="/publications/" theme="blue">
        Publications
        <ArrowRightIcon className={buttonIcon.className} />
      </Button>
    </div>
  </div>
);
