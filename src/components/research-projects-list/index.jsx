import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import ReserchProject from './research-project';
import style from './style';

export default (props) => {
  const {
    researchProjects: { nodes: items },
    tags: { nodes: tags },
  } = useStaticQuery(graphql`
    query ResearchProjects {
      researchProjects: allWpResearchProject(
        sort: { fields: acf___start, order: DESC }
      ) {
        nodes {
          title
          acf {
            acronym
            end
            externalLink
            start
            summary
          }
        }
      }

      tags: allWpTag {
        nodes {
          name
          slug
        }
      }
    }
  `);

  return (
    <ul {...props}>
      <style jsx>{style}</style>

      {items.map((item) => (
        <li key={`research-project-${item.title}`}>
          <ReserchProject {...item} tags={tags} />
        </li>
      ))}
    </ul>
  );
};
