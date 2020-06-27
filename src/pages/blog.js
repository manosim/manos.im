import React from 'react';
import { Link, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import { Button } from '../components/Button';
import { Layout } from '../components/Layout';
import { SEO } from '../components/Seo';

const BlogPage = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location}>
      <SEO title="Blog" />

      <div className="container flex-col">
        {posts.map(item => {
          const post = item.node;
          const postPath = `/blog/${post.frontmatter.slug}`;

          return (
            <div className="mt-6" key={post.id}>
              <h2 className="font-semibold text-2xl">
                <Link to={postPath}>{post.frontmatter.title}</Link>
              </h2>
              <div className="flex justify-between items-center mt-2 mb-3">
                <div className="flex items-center text-sm">
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                  {post.frontmatter.date}
                </div>
              </div>

              {post.frontmatter.cover && (
                <img
                  className="mx-auto my-5"
                  src={`/images/posts/${post.frontmatter.cover}`}
                  alt={post.frontmatter.title}
                />
              )}

              <div className="flex flex-col items-start">
                <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />

                <Button to={postPath} />
              </div>
            </div>
          );
        })}
      </div>
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
