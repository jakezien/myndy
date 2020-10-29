/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
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

  ],
}
