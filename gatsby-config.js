require('dotenv').config();

const { createProxyMiddleware } = require('http-proxy-middleware');

const { env } = process;

module.exports = {
  siteMetadata: {
    siteUrl: 'https://coaltransitions.org',
    title: 'Coal Transitions',
    twitter: {
      screen_name: 'CoalTransitions',
      count: 100,
      exclude_replies: true,
    },

    socialMediaChannels: {
      twitter: 'https://twitter.com/coaltransitions',
      linkedIn: 'https://www.linkedin.com/company/coalexit/',
    },
  },

  plugins: [
    {
      resolve: 'gatsby-source-wordpress-experimental',
      options: {
        url: env.WP_ENDPOINT,

        auth: {
          htaccess: {
            username: env.WP_AUTH_USERNAME,
            password: env.WP_AUTH_PASSWORD,
          },
        },

        schema: {
          timeout: 60000,
        },
      },
    },

    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static\/logos|icons|strokes/,
        },
      },
    },

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'CoalTransitions | Research Hub',
        short_name: 'CoalTransitions',
        start_url: '/',
        background_color: '#0D47A1',
        theme_color: 'white',
        display: 'standalone',
        icon: './static/favicon-200.png',
        legacy: false,
      },
    },

    'gatsby-plugin-netlify',
    'gatsby-plugin-styled-jsx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-advanced-sitemap',
  ],

  developMiddleware: (app) => {
    app.use(
      '/.netlify/functions/',
      createProxyMiddleware({
        target: 'http://localhost:9000',
      })
    );
  },
};
