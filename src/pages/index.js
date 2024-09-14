import React from 'react';

import { Layout } from '../components/Layout';
import { SEO } from '../components/Seo';

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Head of Engineering at Travelex" />

    <div className="flex flex-1 flex-col justify-center items-center bg-primary text-white">
      <div className="max-w-xl mx-12 my-5">
        <h1 className="font-display text-5xl">Hello, I'm Manos.</h1>
        <div className="mt-4 font-medium text-xl">
          Head of Engineering at{' '}
          <a
            className="text-nearform hover:text-gray-900"
            href="https://www.travelex.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Travelex
          </a>
        </div>

        <div className="mt-2 font-light text-sm">
          Previously at{' '}
          <a
            className="hover:text-blue-400"
            href="https://www.nearform.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nearform
          </a>
          ,{' '}
          <a
            className="hover:text-blue-400"
            href="https://www.formidable.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Formidable
          </a>
          ,{' '}
          <a
            className="hover:text-blue-400"
            href="https://www.thetimes.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Times & The Sunday Times
          </a>
          ,{' '}
          <a className="hover:text-blue-400" href="https://www.news.co.uk/" target="_blank" rel="noopener noreferrer">
            News UK
          </a>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
