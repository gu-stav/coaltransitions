import classnames from 'classnames';
import Link from 'gatsby-link';
import React from 'react';
import { graphql } from 'gatsby';

import Button from '../../button';
import style, { titleLink, imageLink } from './style';

export default ({
  slug,
  title,
  figureCaption,
  featuredImage,
  acf: { intro },
  theme
}) => {
  const url = `/coal-phase-out/${slug}/`;

  return (
    <section
      className={classnames('argument', {
        'argument--has-theme-green': theme === 'green'
      })}
    >
      <style jsx>{style}</style>
      {titleLink.styles}
      {imageLink.styles}

      <figure className="image-container">
        <Link to={url} className={imageLink.className} rel="nofollow">
          <picture className="image">
            {featuredImage && featuredImage.localFile && (
              <>
                <source
                  type="image/webp"
                  srcSet={
                    featuredImage.localFile.childImageSharp.fluid.srcSetWebp
                  }
                />

                <source
                  type="image/png"
                  srcSet={featuredImage.localFile.childImageSharp.fluid.srcSet}
                />

                <img
                  src={featuredImage.localFile.childImageSharp.fluid.src}
                  alt=""
                  loading="lazy"
                />
              </>
            )}
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

        {intro && (
          <div className="intro" dangerouslySetInnerHTML={{ __html: intro }} />
        )}

        <Button to={url} rel="nofollow">
          Mehr lesen
        </Button>
      </div>
    </section>
  );
};

export const fragment = graphql`
  fragment factListItem on wordpress__wp_coal_phase_out {
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
    }
  }
`;
