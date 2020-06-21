import React from 'react';
import PropTypes from 'prop-types';

import { Footer } from './Footer';
import { Navbar } from './Navbar';

export const Layout = ({ children, location }) => {
  return (
    <>
      <Navbar location={location} />

      {children}

      <Footer location={location} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};
