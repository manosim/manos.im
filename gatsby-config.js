module.exports = {
  siteMetadata: {
    siteUrl: process.env.SITE_URL,
    title: `Emmanouil Konstantinidis`,
    description: `Emmanouil Konstantinidis. Engineering Manager at NearForm. Previously at Formidable, The Times & The Sunday Times, News UK. Hobbies include JavaScript, Python, Swift and more.`,
    author: `@manosim_`,
    keywords:
      'emmanouil,konstantinidis,manos.im,iamemmanouil,ekonstantinidis,engineering,manager,nearform,formidable,principal,software,engineer,dabapps,simpplr,the times,the sunday times,newsuk,news,london,uk',
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
    `gatsby-plugin-postcss`,
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
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Permanent Marker',
              variants: ['400'],
              fontDisplay: 'block',
            },
          ],
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
