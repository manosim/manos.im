import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import { Layout } from '../components/Layout';
import { SEO } from '../components/Seo';

const MoreLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 1.25rem 2rem;
  margin-top: 1.25rem;

  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;

  border: 0.1rem ${props => props.theme.colors.primary} solid;
  border-radius: 0.25rem;
  color: ${props => props.theme.colors.primary};

  :hover {
    background-color: ${props => props.theme.colors.primary};
    color: white;
  }
`;

export const PostCover = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const BlogPage = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location}>
      <SEO title="Blog" />

      <div className="container mx-auto flex-col px-3">
        {posts.map(item => {
          const post = item.node;
          const postPath = `/blog/${post.frontmatter.slug}`;

          return (
            <div className="mt-6" key={post.id}>
              <h2 className="font-display font-semibold text-2xl">
                <Link to={postPath}>{post.frontmatter.title}</Link>
              </h2>

              <div className="flex justify-between items-center mt-2 mb-3">
                <div className="flex items-center text-sm">
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                  {post.frontmatter.date}
                </div>
              </div>

              {post.frontmatter.cover && (
                <PostCover
                  src={`/images/posts/${post.frontmatter.cover}`}
                  alt={post.frontmatter.title}
                />
              )}

              <div className="flex flex-col items-start">
                <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />

                <MoreLink to={postPath}>
                  Continue reading
                  <FontAwesomeIcon icon={faChevronRight} className="mr-2" />
                </MoreLink>
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
