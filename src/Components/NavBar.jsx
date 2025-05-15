import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top px-4"
      style={{
        height: '80px',                    // Increased height
        backgroundColor: 'rgba(46, 59, 78, 0.75)',  // Transparent dark with 75% opacity
        backdropFilter: 'blur(8px)',      // Blur behind navbar for nice glass effect
        WebkitBackdropFilter: 'blur(8px)', // Safari support
        zIndex: 1030                      // Bootstrap default for navbar fixed-top
      }}
    >
      <div className="container-fluid h-100 d-flex align-items-center">
        {/* Brand */}
        <Link className="navbar-brand fs-4" to="/">
          HelloCountries
        </Link>

        {/* Mobile toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center h-100">
            <li className="nav-item mx-2">
              <NavLink
                to="/allcountries"
                className="nav-link px-3"
                activeClassName="active"
              >
                All Countries
              </NavLink>
            </li>

            <li className="nav-item mx-2">
              <NavLink
                to="/favorites"
                className="nav-link px-3"
                activeClassName="active"
              >
                Favorites
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
