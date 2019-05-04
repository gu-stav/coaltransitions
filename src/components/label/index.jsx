/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';

import style from './style';

export default ({ children, ...attributes }) => (
  <label {...attributes}>
    <style jsx>{style}</style>
    {children}
  </label>
);
