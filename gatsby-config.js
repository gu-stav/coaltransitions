const config = require('./config.json');

module.exports = {
  siteMetadata: {
    title: 'Coal Transitions',
    menu: [
      ['Coal Phase-out', '/coal-phase-out/'],
      ['Publications', '/publications/']
    ]
  },

  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: config.endpoint,
        protocol: 'https',
        includedRoutes: [
          '**/publications',
          '**/coal-phase-out',
          '**/media',
          '**/tags'
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
          include: /static/
        }
      }
    },

    'gatsby-plugin-styled-jsx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
};
