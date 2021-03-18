const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`)
require("dotenv").config({
  path: `.env.${activeEnv}`,
})
module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter",
    apiUrl: process.env.API_URL,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        languages: [`en`],
        defaultLanguage: `en`,
        redirect: true,
        redirectDefaultLanguageToRoot: true,
        ignoredPaths: [],
      },
    },
    "gatsby-plugin-react-helmet"
  ]
}