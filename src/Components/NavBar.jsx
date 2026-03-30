import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import icon from '../assets/icon.png';
import { useAuth } from '../contexts/AuthContext';

function NavBar() {
  const { currentUser, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  // Toggle the dropdown menu
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleLogout = async () => {
    await logout(); 
    navigate("/");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top px-4 modern-navbar"
    >
      <div className="container-fluid h-100 d-flex align-items-center">
      {/* Brand */}
        <Link className="navbar-brand fs-4 d-flex align-items-center" to="/">
          <span className="brand-orb">
            <img
              src={icon}
              alt="HelloCountries Icon"
              className="brand-icon"
            />
          </span>
          <span className="brand-title">HelloCountries</span>
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
          <ul className="navbar-nav ms-auto align-items-center h-100 gap-2">
            <li className="nav-item mx-2">
              <NavLink
                to="/allcountries"
                className={({ isActive }) => `nav-link px-3 modern-link${isActive ? ' active' : ''}`}
              >
                <span className="link-icon">🌎</span>
                All Countries
              </NavLink>
            </li>

            <li className="nav-item mx-2">
              <NavLink
                to="/favorites"
                className={({ isActive }) => `nav-link px-3 modern-link${isActive ? ' active' : ''}`}
              >
                <span className="link-icon">❤</span>
                Favorites
              </NavLink>
            </li>

            {/* Show logged in user email or name if logged in */}
            {currentUser && (
              <li className="nav-item mx-2 d-flex align-items-center">
                <button
                  type="button"
                  className="btn btn-link nav-user-chip"
                  onClick={toggleDropdown}
                >
                  <span className="link-icon">🧑</span>
                  {currentUser.email ? currentUser.email.split('@')[0] : currentUser.displayName}
                </button>

                {/* Dropdown Menu for Logout */}
                {showDropdown && (
                  <ul className="dropdown-menu show modern-dropdown">
                    <li>
                      <button className="dropdown-item" onClick={handleLogout}>
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
