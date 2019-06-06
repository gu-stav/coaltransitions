import React from 'react';

import Finding from '../findings-list/finding';

export default ({ title, image }) => (
  <>
    <Finding
      slug=""
      title={title}
      acf={{ intro: null, factNumber: 1 }}
      indexTitle="Main Finding"
      featuredImage={image}
      buttonLabel="More about our findings"
      fullsizeImage
    />
  </>
);
