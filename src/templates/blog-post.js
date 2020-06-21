import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
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

      <div className="container mx-auto flex-col px-3">
        <div className="mt-6">
          <h2 className="font-display font-semibold text-2xl">
            <Link to={postPath}>{post.frontmatter.title}</Link>
          </h2>

          <div className="flex justify-between items-center mt-2 mb-3">
            <div className="flex items-center text-sm">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              {post.frontmatter.date}
            </div>

            <div className="flex items-center text-sm">
              <TwitterLink
                href={`https://twitter.com/intent/tweet?url=${location.href}&text=${post.frontmatter.title}&via=manosim_`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} /> tweet
              </TwitterLink>
            </div>
          </div>

          {post.frontmatter.cover && (
            <PostCover
              src={`/images/posts/${post.frontmatter.cover}`}
              alt={post.frontmatter.title}
            />
          )}

          <div dangerouslySetInnerHTML={{ __html: post.html }} />

          <h3 className="font-display font-semibold text-xl">Comments</h3>
          <Disqus config={disqusConfig} />
        </div>
      </div>
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
