import React from 'react';

import Finding from './finding';
import style from './style';

export default ({ findings = null }) => (
  <ul>
    <style jsx>{style}</style>

    {findings &&
      findings.map((finding, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={`finding=${index}`}>
          <Finding
            {...finding}
            featuredImage={finding?.featuredImage?.node}
            theme={index % 2 === 0 ? null : 'green'}
            indexTitle={`Finding ${finding.acf.factNumber}`}
          />
        </li>
      ))}
  </ul>
);
