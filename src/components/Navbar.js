import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';

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
    <nav className="bg-primary-dark">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between flex-wrap my-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <a href="/">
            <Logo src="/images/logo.svg" alt="Website Logo" />
          </a>
        </div>

        <div className="block lg:hidden" />

        <div className="w-full block flex-grow lg:flex lg:items-center lg:justify-end lg:w-auto">
          <MenuList>
            {data.site.siteMetadata.menuLinks.map(item => (
              <li key={item.name.toLowerCase()}>
                <Link
                  className={`px-2 py-3 lg:inline-block lg:mt-0 hover:text-white lowercase ${
                    location.pathname === item.path
                      ? 'text-gray-500'
                      : 'text-white'
                  }`}
                  to={item.path}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </MenuList>
        </div>
      </div>
    </nav>
  );
};
