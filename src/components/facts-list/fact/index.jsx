import classnames from 'classnames';
import Link from 'gatsby-link';
import React from 'react';

import Button from '../../button';
import style, { titleLink } from './style';

export default ({ slug, title, excerpt, figureCaption, theme }) => {
  const url = `/arguments/${slug}/`;

  return (
    <section
      className={classnames('argument', {
        'argument--has-theme-green': theme === 'green'
      })}
    >
      <style jsx>{style}</style>
      {titleLink.styles}

      <figure className="image-container">
        <Link to={url} rel="nofollow">
          <picture>
            <img src="https://dummyimage.com/1040x741/000/fff" alt="" />
          </picture>
        </Link>

        <figcaption className="caption">{figureCaption}</figcaption>
      </figure>

      <div className="intro-container">
        <h2 className="title">
          <Link to={url} rel="nofollow" className={titleLink.className}>
            {title}
          </Link>
        </h2>

        {excerpt && (
          <div
            className="excerpt"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        )}

        <Button to={url} rel="nofollow">
          Mehr lesen
        </Button>
      </div>
    </section>
  );
};
