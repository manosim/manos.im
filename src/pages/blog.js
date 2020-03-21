import React from 'react';
import { Link, graphql } from 'gatsby';
import { Flex } from 'rebass/styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarWeek,
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

              <div className="row">
                <div className="col-6">
                  <div className="date">
                    <FontAwesomeIcon className="mr-3" icon={faCalendarWeek} />
                    {post.frontmatter.date}
                  </div>
                </div>

                <div className="col-6"></div>
              </div>

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
