require('dotenv').config('./.env');
const sanityConfig = require('./sanity-config.js');

// gatsby-node.js
// exports.onCreateBabelConfig = ({ actions }) => {
//   actions.setBabelPlugin({
//     name: 'babel-plugin-lodash',
//   });
// };

module.exports = {
  siteMetadata: {
    title: `Fatwo`,
    siteUrl: `https://khadar.vercel.app/`,
    description: `fatwo waa website aad ka helayso su'aalo iyo jawaabo diini ah.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...sanityConfig,
        watchMode: true,
        overlayDrafts: true,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `maqaal`,
      },
    },
    {
    resolve: `gatsby-plugin-postcss`,
    options: {
      // Add any PostCSS options here
    },
  },
    {
      resolve: 'gatsby-plugin-styled-components',
    },
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: `blogs`,
        engine: `flexsearch`,
        engineOptions: {
          tokenize: 'forward',
        },
        query: `
        {
          allSanityBlog {
            nodes {
              id
              title
              publishedAt
              slug {
                current
              }
              coverImage {
                alt
                asset {
                  gatsbyImageData
                }
              }
            }
          }

        } 
        `,
        ref: 'id',
        index: ['title'],
        store: ['id', 'title', 'publishedAt', 'slug', 'coverImage'],
        normalizer: ({ data }) =>
          data.allSanityBlog.nodes.map((node) => ({
            id: node.id,
            title: node.title,
            publishedAt: node.publishedAt,
            slug: node.slug,
            coverImage: node.coverImage,
          })),
      },
    },
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: `categories`,
        engine: `flexsearch`,
        engineOptions: {
          tokenize: 'forward',
        },
        query: `
        {
          allSanityCategory {
            nodes{
              id
              title
              slug {
                current
              }
            }
          }
        } 
        `,
        ref: 'id',
        index: ['title'],
        store: ['id', 'title', 'slug'],
        normalizer: ({ data }) =>
          data.allSanityCategory.nodes.map((node) => ({
            id: node.id,
            title: node.title,
            slug: node.slug,
          })),
      },
    },
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: `authors`,
        engine: `flexsearch`,
        engineOptions: {
          tokenize: 'forward',
        },
        query: `
        {
          allSanityAuthor {
            nodes{
              id
              name
              slug {
                current
              }
              profileImage {
                alt
                asset{
                  gatsbyImageData
                }
              }
            }
          }
        } 
        `,
        ref: 'id',
        index: ['name'],
        store: ['id', 'name', 'slug', 'profileImage'],
        normalizer: ({ data }) =>
          data.allSanityAuthor.nodes.map((node) => ({
            id: node.id,
            name: node.name,
            slug: node.slug,
            profileImage: node.profileImage,
          })),
      },
    },
  ],
};
