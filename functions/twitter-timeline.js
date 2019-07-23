const Twit = require('twit');
const { autoLink } = require('twitter-text');

const {
  siteMetadata: { twitter: twitterOptions }
} = require('../gatsby-config');

const Client = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000
});

const getTweets = () =>
  new Promise((resolve, reject) => {
    Client.get(
      'search/tweets',
      {
        ...twitterOptions,
        tweet_mode: 'extended'
      },
      (error, { statuses = [] }) => {
        if (error) {
          reject(error);
        }

        // Only pick the required properties, in order to keep the response small
        // eslint-disable-next-line camelcase
        const tweets = statuses.map(({ id, full_text, created_at }) => ({
          id,
          full_text: autoLink(full_text),
          created_at
        }));

        resolve(tweets);
      }
    );
  });

exports.handler = async () => {
  try {
    const tweets = await getTweets();

    return {
      statusCode: 200,
      body: JSON.stringify(tweets)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Fetching of tweets failed'
    };
  }
};
