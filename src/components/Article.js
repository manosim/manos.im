import React from 'react';
import { Link } from 'gatsby';
import { Disqus } from 'gatsby-plugin-disqus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import { Button } from './Button';

export const Article = ({ location, title, postDate, postPath, cover, content, slug, isPreview }) => {
  const disqusConfig = {
    url: location.href,
    identifier: slug,
    title: title,
  };

  return (
    <div className="container flex-col">
      <div className="mt-6">
        <h2 className="font-semibold text-2xl">{isPreview ? <Link to={postPath}>{title}</Link> : title}</h2>

        <div className="flex justify-between items-center mt-2 mb-3 text-sm">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
            {postDate}
          </div>

          {!isPreview && (
            <div className="flex items-center">
              <a
                className="bg-twitter text-xs text-white hover:text-primary py-1 px-2 rounded-md"
                href={`https://twitter.com/intent/tweet?url=${location.href}&text=${title}&via=manosim_`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} /> tweet
              </a>
            </div>
          )}
        </div>

        {cover && <img className="mx-auto my-5" src={`/images/posts/${cover}`} alt={title} />}

        <div className="flex flex-col items-start">
          <div dangerouslySetInnerHTML={{ __html: content }} />

          {isPreview && <Button to={postPath} />}
        </div>

        {!isPreview && (
          <>
            <h3 className="font-semibold text-xl mt-6">Comments</h3>
            <Disqus config={disqusConfig} />
          </>
        )}
      </div>
    </div>
  );
};
