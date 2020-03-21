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
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="/images/logo.svg" alt="Logo" className="img-fluid logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            {data.site.siteMetadata.menuLinks.map(item => (
              <li
                className={`nav-item ${
                  location && location.pathname === item.path ? 'active' : ''
                }`}
                key={item.name.toLowerCase()}
              >
                <Link className="nav-link" to={item.path}>
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
