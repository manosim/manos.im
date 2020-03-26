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
  margin-top: ${props => (props.isHomepage ? '0' : '3rem')};
  text-align: center;
  color: white;
  font-size: 0.8rem;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 1.25rem;
`;

export const Footer = ({ location }) => {
  const isHomepage = location && location.pathname === '/';

  return (
    <Container
      py={['2rem', '3rem', '3rem']}
      px={['1rem', '1rem', '2rem']}
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
          <Icon icon={faTwitter} fixedWidth />
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
          <Icon icon={faGithub} fixedWidth />
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
          <Icon icon={faLinkedinIn} fixedWidth />
        </Link>
      </Box>

      <Box my={[1, 0]}>
        Copyright ©{' '}
        <Link href="https://www.manos.im/">Emmanouil Konstantinidis</Link>{' '}
        {new Date().getFullYear()}.
      </Box>
    </Container>
  );
};
