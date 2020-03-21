import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from 'rebass/styled-components';

import { Layout } from '../components/Layout';
import { SEO } from '../components/Seo';

const Container = styled(Flex)`
  flex-direction: column;
  background-color: ${props => props.theme.colors.primary};
  align-items: center;
  padding: 3rem;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Principal Engineer at The Times & The Sunday Times, NewsUK" />

    <Container>
      <Box display="flex" flex={1} flexDirection="column" maxWidth={750}>
        <h1 className="display-4 text-light">Hello, I'm Manos.</h1>

        <p className="lead text-light header-desc mt-4">
          Principal Engineer @{' '}
          <a
            href="https://www.thetimes.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Times & The Sunday Times
          </a>
          ,{' '}
          <a
            href="https://www.news.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            News UK
          </a>
          .
        </p>
      </Box>
    </Container>
  </Layout>
);

export default IndexPage;
