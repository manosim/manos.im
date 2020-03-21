import React from 'react';
import styled from 'styled-components';
import { Box, Flex, Link } from 'rebass/styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

const Container = styled(Flex)`
  background-color: ${props => props.theme.colors.primary};
  padding: 3rem 2rem;
  margin-top: ${props => (props.isHomepage ? '0' : '3rem')};
  text-align: center;
  color: white;
  font-size: 0.8rem;
`;

export const Footer = ({ location }) => {
  const isHomepage = location && location.pathname === '/';

  return (
    <Container
      flexWrap="wrap"
      py={1}
      px={3}
      flexDirection="column"
      alignItems="center"
      isHomepage={isHomepage}
    >
      <Box mt={1} mb={4}>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/manosim_"
          aria-label="Twitter"
          variant="link"
          mx={2}
          p={0.5}
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" fixedWidth />
        </Link>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/manosim/ui-color/"
          aria-label="GitHub Repository"
          variant="link"
          mx={2}
          p={0.5}
        >
          <FontAwesomeIcon icon={faGithub} size="2x" fixedWidth />
        </Link>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://uk.linkedin.com/in/manosim"
          aria-label="Linked In"
          variant="link"
          mx={2}
          p={0.5}
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" fixedWidth />
        </Link>
      </Box>

      <Box my={[1, 0]}>
        Copyright ©{' '}
        <Link variant="link" href="https://www.manos.im/">
          Emmanouil Konstantinidis
        </Link>{' '}
        {new Date().getFullYear()}.
      </Box>
    </Container>
  );
};
