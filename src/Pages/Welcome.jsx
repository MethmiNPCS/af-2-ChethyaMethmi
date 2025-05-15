// src/Pages/Welcome.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import globe from '../assets/globe.png';  // make sure you have this file

function Welcome() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center vh-100 text-center"
      style={{
        background: 'linear-gradient(120deg,rgb(254, 254, 254) 0%,rgb(255, 251, 251) 100%)',
        paddingTop: '100px'
      }}
    >
      <img
        src={globe}
        alt="Globe"
        className="mb-4"
        style={{ width: '400px', height: '350px' }}
      />

      <h1 className="display-3 text-black mb-1">Explore the World</h1>

      <p className="lead text-black mb-4 px-3 " style={{ maxWidth: '600px' }}>
        Discover every country, dive into their cultures, and save your favorites
        all in one place.
      </p>

      <Link to="/allcountries" className="btn btn-dark btn-lg">
        Get Started
      </Link>
    </div>
  );
}

export default Welcome;
