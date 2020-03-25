import React from 'react';
import styled from 'styled-components';
import { Box, Flex, Heading, Link, Text } from 'rebass/styled-components';

import { Layout } from '../components/Layout';
import { SEO } from '../components/Seo';

const Container = styled(Flex)`
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.primary};
  color: white;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Principal Engineer at The Times & The Sunday Times, NewsUK" />

    <Container p={['1rem', '2rem', '3rem']}>
      <Box maxWidth={750}>
        <Heading as="h1" fontSize="3rem">
          Hello, I'm Manos.
        </Heading>

        <Text variant="lead" mt={4}>
          Principal Engineer @{' '}
          <Link
            href="https://www.thetimes.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Times & The Sunday Times
          </Link>
          ,{' '}
          <Link
            href="https://www.news.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            News UK
          </Link>
          .
        </Text>
      </Box>
    </Container>
  </Layout>
);

export default IndexPage;
