/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: '/myndy',
  plugins: [

    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-1E4V07KQCV", 
        ],
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
      },
    },

    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /static/ 
        }
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `svg`,
        path: `${__dirname}/static/svg/`,
      },
    },



    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Sen:700', 'Open Sans Condensed:700', 'Commissioner']
        }
      }
    },

    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/typography`,
      },
    },

  ],
}
