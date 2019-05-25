import React, { useEffect, useState } from 'react';

import Button from '../button';
import style from './style';
import Tweet from './tweet';

export default ({ endpoint }) => {
  const [tweets, setTweets] = useState(null);

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(setTweets);
  }, []);

  return (
    <section>
      <style jsx>{style}</style>

      <h2>News</h2>

      <Button to="https://twitter.com/coaltransitions" external theme="blue">
        Follow @coaltransitions
      </Button>

      {tweets && (
        <ul>
          {tweets.map(
            ({
              id,
              retweeted_status: { full_text: fullText },
              created_at: createdAt
            }) => (
              <li key={`tweet=${id}`}>
                <Tweet createdAt={createdAt} text={fullText} />
              </li>
            )
          )}
        </ul>
      )}
    </section>
  );
};
