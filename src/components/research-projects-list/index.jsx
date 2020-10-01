import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import ReserchProject from './research-project';
import style from './style';

export const fragment = graphql`
  fragment ResearchProjectList on WpPage_Acf_Content_Researchprojectslist {
    show
  }
`;

export default ({ show }) => {
  const {
    researchProjects: { nodes },
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
            completed
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

  const filteredProjects = nodes.filter(({ acf: { completed } }) => {
    if (show === 'completed') {
      return completed === true;
    }

    return !completed;
  });

  return (
    <ul>
      <style jsx>{style}</style>

      {filteredProjects.map((item) => (
        <li key={`research-project-${item.title}`}>
          <ReserchProject {...item} tags={tags} />
        </li>
      ))}
    </ul>
  );
};
