import React, { useEffect, useState } from 'react';

import Button from '../button';
import style from './style';
import Tweet from './tweet';

export default ({ endpoint, title }) => {
  const [tweets, setTweets] = useState(null);

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(setTweets);
  }, []);

  return (
    <section>
      <style jsx>{style}</style>

      <h2 className="title">
        {title}

        <hr />

        <Button to="https://twitter.com/coaltransitions" external theme="blue">
          Follow @coaltransitions
        </Button>
      </h2>

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
