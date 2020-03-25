import React from 'react';
import styled from 'styled-components';
import { Flex, Link as RebassLink } from 'rebass/styled-components';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';

const Container = styled.nav`
  background-color: ${props => props.theme.colors.primary};
`;

const Logo = styled.img`
  height: 27px;
  max-width: 100%;
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`;

export const Navbar = ({ location }) => {
  const data = useStaticQuery(graphql`
    query SitePages {
      site {
        siteMetadata {
          menuLinks {
            name
            path
          }
        }
      }
    }
  `);

  return (
    <Container>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        sx={{ maxWidth: 730, mx: 'auto' }}
        py={3}
        px={3}
      >
        <a href="/">
          <Logo src="/images/logo.svg" alt="Website Logo" />
        </a>

        <MenuList>
          {data.site.siteMetadata.menuLinks.map(item => (
            <li key={item.name.toLowerCase()}>
              <RebassLink
                variant="navlink"
                as={Link}
                to={item.path}
                color={location.pathname === item.path ? 'white' : 'gray'}
              >
                {item.name}
              </RebassLink>
            </li>
          ))}
        </MenuList>
      </Flex>
    </Container>
  );
};
