import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { Footer } from './Footer';
import { Navbar } from './Navbar';

const COLOR_PRIMARY = '#010E1E';
const COLOR_GRAY = '#868E95';
const COLOR_GRAY_DARK = '#474F56';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    line-height: 1.5;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
  }

 html, body, #___gatsby {
    height: 100%;
  }

  body {
    margin: 0px;
  }

  #gatsby-focus-wrapper {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: ${COLOR_GRAY};
    text-decoration: none;
  }

  a:hover, a:focus, a:active {
    color: ${COLOR_GRAY_DARK};
  }

  .gatsby-highlight {
    display: inline-grid;
  }

  :not(pre) > code[class*='language-text'] {
    color: #e83e8c;
    background-color: initial !important;
  }
`;

const theme = {
  colors: {
    primary: COLOR_PRIMARY,
    twitter: '#00aced',
    gray: COLOR_GRAY,
  },
  fonts: {
    heading: "'Sen', sans-serif",
    monospace: "Menlo, Monaco, Consolas, 'Courier New', monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
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
      color: COLOR_GRAY,
      textDecoration: 'none',
      backgroundColor: 'transparent',
      ':hover,:focus,:active': {
        color: COLOR_GRAY_DARK,
      },
    },
    navlink: {
      fontFamily: "'Quicksans', sans-serif",
      fontSize: [16, 18, 18],
      textDecoration: 'none',
      textTransform: 'lowercase',
      fontWeight: 500,
      paddingLeft: ['0.5rem', '1rem', '1rem'],
      paddingRight: ['0.5rem', '1rem', '1rem'],
    },
  },
  text: {
    lead: {
      fontSize: '1.25rem',
      fontWeight: '300',
      lineHeight: 1.5,
    },
    date: {
      fontSize: '0.9rem',
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
