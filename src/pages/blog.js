import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import {
  Box,
  Flex,
  Heading,
  Link as RebassLink,
  Text,
} from 'rebass/styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import { Layout } from '../components/Layout';
import { SEO } from '../components/Seo';

const MoreLink = styled(RebassLink)`
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

export const DateIcon = styled(FontAwesomeIcon)`
  margin-right: 0.75rem;
`;

const ButtonIcon = styled(FontAwesomeIcon)`
  margin-left: 0.75rem;
`;

const BlogPage = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location}>
      <SEO title="Blog" />

      <Flex flexDirection="column" sx={{ maxWidth: 730, mx: 'auto' }} px={3}>
        {posts.map(item => {
          const post = item.node;
          const postPath = `/blog/${post.frontmatter.slug}`;

          return (
            <Box mt={4} key={post.id}>
              <Heading as="h2" color="black">
                <RebassLink as={Link} to={postPath}>
                  {post.frontmatter.title}
                </RebassLink>
              </Heading>

              <Flex
                justifyContent="space-between"
                align-items="center"
                mt={2}
                mb={3}
              >
                <Flex alignItems="center">
                  <DateIcon icon={faCalendarAlt} />
                  <Text variant="date">{post.frontmatter.date}</Text>
                </Flex>
              </Flex>

              {post.frontmatter.cover && (
                <PostCover
                  src={`/images/posts/${post.frontmatter.cover}`}
                  alt={post.frontmatter.title}
                />
              )}

              <Flex flexDirection="column" alignItems="flex-start">
                <Text dangerouslySetInnerHTML={{ __html: post.excerpt }} />

                <MoreLink as={Link} to={postPath}>
                  Continue reading
                  <ButtonIcon icon={faChevronRight} />
                </MoreLink>
              </Flex>
            </Box>
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
