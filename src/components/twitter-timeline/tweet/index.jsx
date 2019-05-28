import React from 'react';
import twitterText from 'twitter-text';

import style from './style';

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October'
];

const parseDate = date => {
  const parsed = new Date(date);

  const day = parsed.getDate();
  const month = parsed.getMonth();

  return `${MONTH_NAMES[month]} ${day}`;
};

export default ({ createdAt, text }) => (
  <div className="tweet">
    <style jsx>{style}</style>

    <small className="date">{parseDate(createdAt)}</small>
    <p
      dangerouslySetInnerHTML={{ __html: twitterText.autoLink(text) }}
      className="text"
    />
  </div>
);
