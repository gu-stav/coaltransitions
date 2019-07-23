Frontend for [coaltransitions.org](https://coaltransitions.org) build with
Gatsby. The data is fetched from a [wordpress backend](https://github.com/zoff-kollektiv/coaltransitions-cms).

## Structure

- `gatsby-config.js`: Contains the site title, the header and footer menu aswell
  as the information which is used to fetch tweets from twitter
- `netlify.toml`: Contains the legacy redirects from the old site
- `src/pages`: All pages which don't have any parameters (frontpage, overviews ...)
- `src/templates`: Pages which have input parameters (finding, publication ...)
- `src/lib`: Helper functions, for page creation aswell as publication filtering
- `src/components`: All components which are used in pages and templates to render
  the pages. Components are reusable chunks of code.
- `src/tokens.js`: Variables for colors, mediaqueries and fonts

### Tweets

Tweets are embedded from the coaltransitions twitter account. `./functions/twitter-timeline.js`
functions as a proxy, for authentication and data fetching. The function
is deployed as an AWS Lambda function by netlify.

#### Environment variables

To fetch tweets from the twitter timeline, the following environment variables
are required:

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

First you need to install the project dependencies by running

`npm run install`

To start the development server now run:

`npm run develop`

This should give you access to [localhost:8000](http://localhost:8000) where
you can access the development build of the site, with production data.

### Functions

To fetch the data from the twitter account you also have to boot up the lamda
development environment (check the required environment variables mentioned
above):

`npm run serve-functions`

Afterwards you should be able to access [localhost:9000](http://localhost:9000).

Gatsby automatically proxies the required requests to the functions server. No
additional setup is required.

The twitter search parameters can be found in `gatsby-config.js`.
