import React from 'react';
import { graphql } from 'gatsby';

import { Article } from '../components/Article';
import { Layout } from '../components/Layout';
import { SEO } from '../components/Seo';

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark;
  const postPath = `/blog/${post.fields.slug}`;

  return (
    <Layout location={location}>
      <SEO
        title={post.frontmatter.title}
        keywords={post.frontmatter.keywords}
      />

      <Article
        location={location}
        postPath={postPath}
        title={post.frontmatter.title}
        slug={post.fields.slug}
        postDate={post.frontmatter.date}
        cover={post.frontmatter.cover}
        content={post.html}
        isPreview={false}
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }

    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        keywords
        cover
      }
    }
  }
`;

export default BlogPostTemplate;
