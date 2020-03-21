import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { Footer } from './Footer';
import { Navbar } from './Navbar';

const theme = {
  colors: {
    primary: '#010e1e',
  },
};

export const Layout = ({ children, location }) => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar location={location} />

      {children}

      <Footer location={location} />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};
