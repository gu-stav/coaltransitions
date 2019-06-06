import classnames from 'classnames';
import React from 'react';

import Button from '../button';
import Constraint from '../constraint';
import Intro from '../intro';
import StrokeBottom from '../../../static/strokes/stroke-4-green.svg';
import StrokeTop from '../../../static/strokes/stroke-4-blue.svg';
import style, { stroke, strokeTop, strokeBottom } from './style';

export default ({ title, summary }) => (
  <section>
    <style jsx>{style}</style>
    {stroke.styles}
    {strokeTop.styles}
    {strokeBottom.styles}

    <StrokeTop className={classnames(stroke.className, strokeTop.className)} />

    <Constraint>
      <h2 className="title">{title}</h2>
      <Intro intro={summary} />
      <Button theme="blue" to="/about/">
        More about us
      </Button>
    </Constraint>

    <StrokeBottom
      className={classnames(stroke.className, strokeBottom.className)}
    />
  </section>
);
