import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import { Flex, Heading, Text } from 'rebass/styled-components';
import { Disqus } from 'gatsby-plugin-disqus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import { Layout } from '../components/Layout';
import { PostCover } from '../pages/blog';
import { SEO } from '../components/Seo';

const TwitterLink = styled.a`
  background: ${props => props.theme.colors.twitter};
  color: white;
  padding: 0.15rem 0.25rem;
  border-radius: 0.25rem;
  font-size: 0.8rem;

  &:hover {
    background: white;
  }
`;

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark;
  const postPath = `/blog/${post.fields.slug}`;
  const disqusConfig = {
    url: location.href,
    identifier: post.fields.slug,
    title: post.frontmatter.title,
  };

  return (
    <Layout location={location}>
      <SEO
        title={post.frontmatter.title}
        keywords={post.frontmatter.keywords}
      />

      <Flex
        flexDirection="column"
        sx={{ maxWidth: 730, mx: 'auto' }}
        px={3}
        mt={4}
      >
        <div className="post">
          <Heading as="h2">
            <Link to={postPath} color="black">
              {post.frontmatter.title}
            </Link>
          </Heading>

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

            <Flex alignItems="center">
              <TwitterLink
                href={`https://twitter.com/intent/tweet?url=${location.href}&text=${post.frontmatter.title}&via=manosim_`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="mr-1" icon={faTwitter} /> tweet
              </TwitterLink>
            </Flex>
          </Flex>

          {post.frontmatter.cover && (
            <PostCover
              src={`/images/posts/${post.frontmatter.cover}`}
              alt={post.frontmatter.title}
            />
          )}

          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <div className="comments">
            <Heading as="h2" color="black">
              Comments
            </Heading>
            <Disqus config={disqusConfig} />
          </div>
        </div>
      </Flex>
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
