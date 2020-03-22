import React from 'react';
import { Link, graphql } from 'gatsby';
import { Box, Flex, Text } from 'rebass/styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import { Layout } from '../components/Layout';
import { SEO } from '../components/Seo';

const BlogPage = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location}>
      <SEO title="Blog" />
      <Flex flexDirection="column" sx={{ maxWidth: 730, mx: 'auto' }}>
        {posts.map(item => {
          const post = item.node;
          const postPath = `/blog/${post.frontmatter.slug}`;

          return (
            <div className="post" key={post.id}>
              <h2>
                <Link className="title" to={postPath}>
                  {post.frontmatter.title}
                </Link>
              </h2>

              <Flex
                justifyContent="space-between"
                align-items="center"
                mt={2}
                mb={3}
              >
                <Flex alignItems="center">
                  <FontAwesomeIcon className="mr-2" icon={faCalendarAlt} />
                  <Text variant="date">{post.frontmatter.date}</Text>
                </Flex>
              </Flex>

              {post.frontmatter.cover && (
                <img
                  className="img-fluid mt-1 mb-3"
                  src={`/images/posts/${post.frontmatter.cover}`}
                  alt={post.frontmatter.title}
                />
              )}

              <div className="post-content">
                <span dangerouslySetInnerHTML={{ __html: post.excerpt }} />

                <Link
                  className="btn btn-primary btn-lg read-more"
                  to={postPath}
                >
                  Continue reading
                  <FontAwesomeIcon className="ml-3" icon={faChevronRight} />
                </Link>
              </div>
            </div>
          );
        })}
      </Flex>
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
