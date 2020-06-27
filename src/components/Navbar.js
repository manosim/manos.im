import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';

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
    <nav className="bg-primary">
      <div className="container flex flex-col lg:flex-row items-center justify-between flex-wrap my-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <a href="/">
            <img className="logo" src="/images/logo.svg" alt="Website Logo" />
          </a>
        </div>

        <div className="w-full block flex flex-1 justify-center items-center lg:justify-end lg:w-auto mt-5 lg:mt-0">
          <ul className="flex flex-row list-none">
            {data.site.siteMetadata.menuLinks.map(item => (
              <li key={item.name.toLowerCase()}>
                <Link
                  className={`px-2 py-3 lg:inline-block lg:mt-0 lowercase ${
                    location.pathname === item.path
                      ? 'text-gray-500'
                      : 'text-white'
                  } hover:text-blue-400`}
                  to={item.path}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
