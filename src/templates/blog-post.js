import React from 'react';
import { Link, graphql } from 'gatsby';
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

  return (
    <Layout location={location}>
      <SEO
        title={post.frontmatter.title}
        keywords={post.frontmatter.keywords}
      />

      <div className="container flex-col">
        <div className="mt-6">
          <h2 className="font-semibold text-2xl">
            <Link to={postPath}>{post.frontmatter.title}</Link>
          </h2>

          <div className="flex justify-between items-center mt-2 mb-3 text-sm">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              {post.frontmatter.date}
            </div>

            <div className="flex items-center">
              <a
                className="bg-twitter text-xs text-white hover:text-primary py-1 px-2 rounded-md"
                href={`https://twitter.com/intent/tweet?url=${location.href}&text=${post.frontmatter.title}&via=manosim_`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} /> tweet
              </a>
            </div>
          </div>

          {post.frontmatter.cover && (
            <img
              className="mx-auto my-5"
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
