require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Delicious Dinners`,
    siteUrl: `https://mrshanehunter-delicious-dinners.netlify.app`,
    description: `A restaurant ordering site built using Gatsby & Sanity.`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '7iab27mp',
        dataset: 'production',
        watchMode: false,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
