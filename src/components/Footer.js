import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

export const Footer = ({ location }) => {
  const isHomepage = location && location.pathname === '/';

  return (
    <div
      className={`bg-primary text-white text-sm py-10 px-3 ${
        isHomepage ? 'mt-0' : 'mt-12'
      }`}
    >
      <div className="container flex flex-col item-center text-center">
        <div className="mt-1 mb-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/manosim_"
            aria-label="Twitter"
            className="hover:text-blue-400 mx-2 p-1"
          >
            <FontAwesomeIcon icon={faTwitter} fixedWidth className="text-2xl" />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/manosim"
            aria-label="GitHub"
            className="hover:text-blue-400 mx-2 p-1"
          >
            <FontAwesomeIcon icon={faGithub} fixedWidth className="text-2xl" />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://uk.linkedin.com/in/manosim"
            aria-label="Linked In"
            className="hover:text-blue-400 mx-2 p-1"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              fixedWidth
              className="text-2xl"
            />
          </a>
        </div>

        <div className="my-3">
          Copyright ©{' '}
          <a className="hover:text-blue-400" href="https://www.manos.im/">
            Emmanouil Konstantinidis
          </a>{' '}
          {new Date().getFullYear()}.
        </div>
      </div>
    </div>
  );
};
