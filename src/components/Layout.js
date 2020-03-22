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
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #___gatsby {
    height: 100%;
  }

  #___gatsby > * {
    display: flex;
    flex-direction: column;
    height: 100%;
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
  fontSizes: [120, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  variants: {
    link: {
      color: '#939ba2',
      textDecoration: 'none',
      backgroundColor: 'transparent',
      ':hover': {
        color: '#007BF5',
        textDecoration: 'none',
      },
    },
  },
  text: {
    lead: {
      fontSize: '1.25rem',
      fontWeight: '300',
    },
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
