import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Researcher from './researcher';
import { sortBySecondName } from '../../lib/sort-by-second-name';
import style from './style';

export default (props) => {
  const {
    researchers: { nodes: items },
  } = useStaticQuery(graphql`
    query Researchers {
      researchers: allWpResearcher {
        nodes {
          title
          acf {
            affiliation
            background
            email
            image {
              localFile {
                childImageSharp {
                  fixed(height: 400, width: 400) {
                    src
                    srcSet
                    srcSetWebp
                  }
                }
              }
            }
            partOfCoalexitGroup
            phone
            pinToTop
            topics
          }
        }
      }
    }
  `);

  // Sort researchers by second name
  const researchers = items.sort(sortBySecondName);

  const pinnedResearchers = researchers.filter(
    ({ acf: { pin_to_top: pinToTop } }) => pinToTop === true
  );

  const nonPinnedResearchers = researchers.filter(
    ({ acf: { pin_to_top: pinToTop } }) => !pinToTop
  );

  return (
    <>
      <style jsx>{style}</style>

      <ul {...props}>
        {pinnedResearchers.map((item) => (
          <li>
            <Researcher {...item} />
          </li>
        ))}

        {nonPinnedResearchers.map((item) => (
          <li>
            <Researcher {...item} />
          </li>
        ))}
      </ul>
    </>
  );
};
