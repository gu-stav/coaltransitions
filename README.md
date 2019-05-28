Frontend for [coaltransitions.org](https://coaltransitions.org). The data is
fetched from the wordpress backend.

Tweets are embedded from the twitter account. `./functions/twitter-timeline.js`
functions as a proxy, to do the authentication and data fetching. This function
is deployed as an AWS Lambda function.

## Environment variables

To fetch tweets from the twitter timeline, the following variables are required:

```
TWITTER_CONSUMER_KEY: Twitter consumer key
TWITTER_CONSUMER_SECRET: Twitter consumer secret
TWITTER_ACCESS_TOKEN: Twitter access token
TWITTER_ACCESS_TOKEN_SECRET: Twitter access token secret
```

## Production build

By running `npm run build` gatsby creates a static version of the site in
`./public`.

### Build status

[![Netlify Status](https://api.netlify.com/api/v1/badges/f051ac1e-f9b0-424a-9477-dd9bdef6e833/deploy-status)](https://app.netlify.com/sites/coaltransitions/deploys)

## Development

To start the development server, simply run:

`npm run develop`

Afterwards you should be able to access [localhost:8000](http://localhost:8000).

### Run functions

To fetch the data from the twitter account on the startpage you also have to
boot up the lamda environment with the twitter environment variables mentioned
above:

`npm run serve-functions`

Afterwards you should be able to access [localhost:9000](http://localhost:9000).
