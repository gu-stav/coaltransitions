const config = require('./config.json');

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: config.endpoint,
        protocol: 'https',
        includedRoutes: ['**/publications', '**/media', '**/tags'],
        verboseOutput: true,
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
