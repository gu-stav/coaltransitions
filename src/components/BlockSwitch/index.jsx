import React from 'react';

import LogoGrid from '../LogoGrid';
import Newsletter from '../Newsletter';
import Partner from '../partner';
import Picture from '../picture';
import ResearchersList from '../researchers-list';
import ResearchProjectsList from '../research-projects-list';
import Richtext from '../richtext';

import style from './style';

const BlockSwitch = ({ blocks, typePrefix }) => (
  <div className="block-content">
    <style jsx>{style}</style>

    {blocks &&
      blocks.map((block) => {
        if (block) {
          const { __typename: type } = block;

          // eslint-disable-next-line default-case
          switch (type) {
            case `${typePrefix}Text`:
              return <Richtext content={block.text} />;

            case `${typePrefix}Image`:
              return (
                <Picture
                  image={block.image.localFile}
                  caption={block.image.caption}
                />
              );

            case `${typePrefix}Researchers`:
              return <ResearchersList />;

            case `${typePrefix}Researchprojectslist`:
              return <ResearchProjectsList {...block} />;

            case `${typePrefix}Newsletter`:
              return <Newsletter {...block} />;

            case `${typePrefix}Logogrid`:
              return <LogoGrid {...block} />;

            case `${typePrefix}Partner`:
              return <Partner {...block} />;
          }
        }

        return null;
      })}
  </div>
);

export default BlockSwitch;
