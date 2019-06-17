const proxy = require('http-proxy-middleware');
const config = require('./config.json');

module.exports = {
  siteMetadata: {
    title: 'Coal Transitions',
    menu: [
      ['Findings', '/findings/'],
      ['Publications', '/publications/'],
      ['About', '/about/']
    ],
    footer: [
      ['Imprint', '/imprint/'],
      ['Contact', '/contact/'],
      ['Privacy', '/privacy/']
    ],
    twitter: {
      screen_name: 'CoalTransitions',
      count: 9,
      exclude_replies: true
    }
  },

  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: config.endpoint,
        protocol: 'https',
        includedRoutes: [
          '**/publications',
          '**/findings',
          '**/researchers',
          '**/researchprojects',
          '**/about',
          '**/media',
          '**/tags',
          '**/menus',
          '**/pages'
        ],
        auth: {
          htaccess_user: config.auth_username,
          htaccess_pass: config.auth_password
        }
      }
    },

    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static\/logos|icons|strokes/
        }
      }
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
        legacy: false
      }
    },

    'gatsby-plugin-styled-jsx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ],

  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      proxy({
        target: 'http://localhost:9000'
      })
    );
  }
};
