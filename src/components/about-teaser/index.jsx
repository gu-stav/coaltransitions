import React from 'react';

import Button from '../button';
import Intro from '../intro';
import style from './style';

export default ({ title, summary }) => (
  <section>
    <style jsx>{style}</style>

    <h2 className="title">{title}</h2>
    <Intro intro={summary} />
    <Button theme="blue" to="/about/">
      More about us
    </Button>
  </section>
);
