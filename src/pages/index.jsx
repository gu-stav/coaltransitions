import React from 'react';

import Constraint from '../components/constraint';
import TwitterTimeline from '../components/twitter-timeline';
import withLayout from '../components/with-layout';

const Page = () => (
  <>
    <h1>Index</h1>

    <Constraint>
      <TwitterTimeline endpoint="/.netlify/functions/twitter-timeline" />
    </Constraint>
  </>
);

export default withLayout(Page);
