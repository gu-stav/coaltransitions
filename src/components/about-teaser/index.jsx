import React from 'react';

import Button from '../button';
import Constraint from '../constraint';
import Intro from '../intro';
import StrokeBottom from '../../../static/strokes/stroke-2-blue.svg';
import StrokeTop from '../../../static/strokes/stroke-2-green.svg';
import style from './style';

export default ({ title, summary }) => (
  <section>
    <style jsx>{style}</style>

    <StrokeTop />

    <Constraint>
      <h2 className="title">{title}</h2>
      <Intro intro={summary} />
      <Button theme="blue" to="/about/">
        More about us
      </Button>
    </Constraint>

    <StrokeBottom />
  </section>
);
