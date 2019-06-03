import classnames from 'classnames';
import Link from 'gatsby-link';
import React from 'react';
import { graphql } from 'gatsby';

import ArrowIcon from '../../../../static/icons/arrow-alt-right.svg';
import Button from '../../button';
import Picture from '../../picture';
import style, { titleLink, imageLink, arrowIcon } from './style';

import Stroke1Green from '../../../../static/strokes/stroke-1-green.svg';
import Stroke1Blue from '../../../../static/strokes/stroke-1-blue.svg';

import Stroke2Green from '../../../../static/strokes/stroke-2-green.svg';
import Stroke2Blue from '../../../../static/strokes/stroke-2-blue.svg';

const STROKES = [
  [Stroke1Green, Stroke1Blue],
  [Stroke1Green, Stroke2Blue],
  [Stroke2Green, Stroke2Blue],
  [Stroke2Green, Stroke1Blue]
];

export default ({
  slug,
  title,
  figureCaption,
  featuredImage,
  acf: { intro },
  indexTitle,
  theme = 'blue',
  buttonLabel = 'Read more about this finding'
}) => {
  const url = `/findings/${slug}/`;
  const [Stroke1, Stroke2] = STROKES[
    Math.floor(Math.random() * STROKES.length)
  ];

  return (
    <section
      className={classnames('argument', {
        'argument--has-theme-green': theme === 'green'
      })}
    >
      <style jsx>{style}</style>
      {titleLink.styles}
      {imageLink.styles}
      {arrowIcon.styles}

      <figure className="image-container">
        <Link to={url} className={imageLink.className} rel="nofollow">
          {featuredImage && featuredImage.localFile && (
            <Picture image={featuredImage.localFile} />
          )}
        </Link>

        <figcaption className="caption">{figureCaption}</figcaption>
      </figure>

      <div className="intro-container">
        <h2 className="title">
          <Link to={url} rel="nofollow" className={titleLink.className}>
            <span className="index">{indexTitle}</span>
            <span dangerouslySetInnerHTML={{ __html: title }} />
          </Link>
        </h2>

        {intro && (
          <div className="intro" dangerouslySetInnerHTML={{ __html: intro }} />
        )}

        <Button to={url} rel="nofollow">
          {buttonLabel}
          <ArrowIcon className={arrowIcon.className} />
        </Button>
      </div>

      <div className="background-strokes-container">
        <Stroke1 />
        <Stroke2 />
      </div>
    </section>
  );
};

export const fragment = graphql`
  fragment findingListItem on wordpress__wp_findings {
    slug
    title
    featuredImage: featured_media {
      localFile {
        childImageSharp {
          fluid(maxWidth: 1200) {
            src
            srcSet
            srcSetWebp
          }
        }
      }
    }
    acf {
      intro
      factNumber: fact_number
    }
  }
`;
