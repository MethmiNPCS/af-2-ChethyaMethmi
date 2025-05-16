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
      className="navbar navbar-expand-lg navbar-dark fixed-top px-4"
      style={{
        height: '80px',
        backgroundColor: 'rgba(46, 59, 78, 0.75)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 1030,
      }}
    >
      <div className="container-fluid h-100 d-flex align-items-center">
      {/* Brand */}
      <Link className="navbar-brand fs-4" to="/">
        <img
          src={icon}
          alt="HelloCountries Icon"
          style={{ width: '30px', height: '30px', marginRight: '10px' }}
        />
        <span style={{ fontWeight: 'bold', fontStyle: 'italic', color: 'white' }}>HelloCountries</span>
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
              <NavLink to="/allcountries" className="nav-link px-3" activeClassName="active">
                🌎 All Countries
              </NavLink>
            </li>

            <li className="nav-item mx-2">
              <NavLink to="/favorites" className="nav-link px-3" activeClassName="active">
                ❤ Favorites
              </NavLink>
            </li>

            {/* Show logged in user email or name if logged in */}
            {currentUser && (
              <li className="nav-item mx-2 d-flex align-items-center">
                <span
                  className="text-white cursor-pointer"
                  onClick={toggleDropdown}
                >
                  🧑 {currentUser.email ? currentUser.email.split('@')[0] : currentUser.displayName}
                </span>

                {/* Dropdown Menu for Logout */}
                {showDropdown && (
                  <ul className="dropdown-menu show" style={{ position: 'absolute', top: '60px', right: '10px' }}>
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
