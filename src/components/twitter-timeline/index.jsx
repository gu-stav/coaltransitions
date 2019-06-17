import React, { useEffect, useState } from 'react';

import Button from '../button';
import style, { twitterIcon } from './style';
import Tweet from './tweet';
import TwitterIcon from '../../../static/icons/twitter.svg';

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
      {twitterIcon.styles}

      <h2 className="title">
        {title}

        <hr />

        <Button to="https://twitter.com/coaltransitions" external theme="blue">
          Follow
          <TwitterIcon className={twitterIcon.className} />
        </Button>
      </h2>

      {tweets && (
        <ul>
          {tweets.map(
            ({
              id,
              retweeted_status: retweetedStatus,
              created_at: createdAt
            }) => {
              if (!retweetedStatus) {
                return null;
              }

              const { full_text: fullText } = retweetedStatus;

              return (
                <li key={`tweet=${id}`}>
                  <Tweet createdAt={createdAt} text={fullText} />
                </li>
              );
            }
          )}
        </ul>
      )}
    </section>
  );
};
