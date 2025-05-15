import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import icon from '../assets/icon.png';
import { useAuth } from '../contexts/AuthContext'; // Import your AuthContext hook

function NavBar() {
  const { currentUser } = useAuth(); // Get current logged-in user

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top px-4"
      style={{
        height: '80px',                    
        backgroundColor: 'rgba(46, 59, 78, 0.75)',  
        backdropFilter: 'blur(8px)',      
        WebkitBackdropFilter: 'blur(8px)', 
        zIndex: 1030                     
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
                🌎 All Countries
              </NavLink>
            </li>

            <li className="nav-item mx-2">
              <NavLink
                to="/favorites"
                className="nav-link px-3"
                activeClassName="active"
              >
                ❤ Favorites
              </NavLink>
            </li>

            {/* Show logged in user email or name if logged in */}
            {currentUser && (
              <li className="nav-item mx-2 d-flex align-items-center">
                <span className="text-white">
                  🧑 {currentUser.email ? currentUser.email.split('@')[0] : currentUser.displayName}
                </span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
