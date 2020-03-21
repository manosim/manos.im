import React from 'react';
import { Link, graphql } from 'gatsby';
import { Flex } from 'rebass/styled-components';
import { Disqus } from 'gatsby-plugin-disqus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import { Layout } from '../components/Layout';
import { SEO } from '../components/Seo';

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark;
  const postPath = `/blog/${post.fields.slug}`;
  const disqusConfig = {
    url: location.href,
    identifier: post.fields.slug,
    title: post.frontmatter.title,
  };

  console.log(post);

  return (
    <Layout location={location}>
      <SEO
        title={post.frontmatter.title}
        keywords={post.frontmatter.keywords}
      />

      <Flex flexDirection="column" sx={{ maxWidth: 730, mx: 'auto' }}>
        <div className="post">
          <h2>
            <Link className="title" to={postPath}>
              {post.frontmatter.title}
            </Link>
          </h2>

          <div className="row">
            <div className="col-6">
              <div className="date">
                <FontAwesomeIcon className="mr-3" icon={faCalendarAlt} />
                {post.frontmatter.date}
              </div>
            </div>

            <div className="col-6 text-right">
              <a
                className="twitter"
                href={`https://twitter.com/intent/tweet?url=${location.href}&text=${post.frontmatter.title}&via=manosim_`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="mr-1" icon={faTwitter} /> tweet
              </a>
            </div>
          </div>

          {post.frontmatter.cover && (
            <img
              className="img-fluid mt-1 mb-3"
              src={`/images/posts/${post.frontmatter.cover}`}
              alt={post.frontmatter.title}
            />
          )}

          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <div className="comments">
            <h2>Comments</h2>
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
