module.exports = {
  siteMetadata: {
    siteUrl: process.env.SITE_URL,
    title: `Emmanouil Konstantinidis`,
    description: `Emmanouil Konstantinidis. Principal Engineer working at The Times & The Sunday Times, News UK. Hobbies include JavaScript, Python, Swift and things other than programming.`,
    author: `@manosim_`,
    keywords:
      'emmanouil,konstantinidis,manos.im,iamemmanouil,ekonstantinidis,principal,software,engineer,dabapps,simpplr,the times,the sunday times,newsuk,news,london,uk',
    menuLinks: [
      {
        name: 'Home',
        path: '/',
      },
      {
        name: 'Blog',
        path: '/blog',
      },
      {
        name: 'Projects',
        path: '/projects',
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!--more-->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: false,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Manos.im`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#010e1e`,
        theme_color: `#010e1e`,
        display: `minimal-ui`,
        icon: `static/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Sen'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `iamemmanouil`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-6891078-38',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
      },
    },
  ],
};
