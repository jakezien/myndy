/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: '/myndset',
  plugins: [

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
        custom: {
          families: ['Verlag', 'Verlag Condensed'],
          urls: ['fonts/fonts.css']
        },
        prefixPaths: "true"
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
