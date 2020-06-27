import React from 'react';
import { graphql } from 'gatsby';

import { Article } from '../components/Article';
import { Layout } from '../components/Layout';
import { SEO } from '../components/Seo';

const BlogPage = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location}>
      <SEO title="Blog" />

      {posts.map((item) => {
        const post = item.node;
        const postPath = `/blog/${post.frontmatter.slug}`;

        return (
          <Article
            key={post.id}
            location={location}
            postPath={postPath}
            title={post.frontmatter.title}
            slug={post.frontmatter.slug}
            postDate={post.frontmatter.date}
            cover={post.frontmatter.cover}
            content={post.excerpt}
            isPreview
          />
        );
      })}
    </Layout>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            slug
            cover
            # description
          }
        }
      }
    }
  }
`;
