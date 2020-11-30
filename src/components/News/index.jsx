import { graphql } from 'gatsby';
import React from 'react';

import BlockSwitch from '../BlockSwitch';
import Constraint from '../constraint';
import Intro from '../intro';

import style from './style';

export const fragment = graphql`
  fragment NewsEntry on WpNewsEntry {
    date(formatString: "DD. MMMM YYYY")
    title

    acf {
      intro

      content {
        ... on WpNewsEntry_Acf_Content_Text {
          text
        }

        ... on WpNewsEntry_Acf_Content_Image {
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...Picture
                }
              }
            }
            caption
          }
        }
      }
    }
  }
`;

const News = ({ title, date, acf: { intro, content } }) => (
  <article>
    <style jsx>{style}</style>
    <Constraint topLevel>
      <h1 className="title">
        <small className="date">{date}</small>
        <span className="title-text">{title}</span>
      </h1>

      <Intro intro={intro} />

      <BlockSwitch blocks={content} typePrefix="WpNewsEntry_Acf_Content_" />
    </Constraint>
  </article>
);

export default News;
