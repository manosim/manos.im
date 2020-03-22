import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { Footer } from './Footer';
import { Navbar } from './Navbar';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
  }
  * {
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: '#010e1e',
  },
  fonts: {
    heading: "'Sen', sans-serif",
    monospace: "Menlo, Monaco, Consolas, 'Courier New', monospace",
  },
};

export const Layout = ({ children, location }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
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
