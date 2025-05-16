// src/Pages/Welcome.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import globe from '../assets/globe.png';

function Welcome() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center vh-100 text-center"
      style={{
        background: 'linear-gradient(120deg,rgb(254, 254, 254) 0%,rgb(255, 251, 251) 100%)',
        paddingTop: '60px',
        paddingBottom: '60px',
      }}
    >
      {/* Globe Image */}
      <img
        src={globe}
        alt="Globe"
        className="mb-4"
        style={{ width: '300px', height: '250px' }}
      />

      {/* Main Heading */}
      <h1 className="display-4 fw-bold text-dark mb-2">Explore the World</h1>

      {/* Subtext */}
      <p className="lead text-dark mb-4 px-3" style={{ maxWidth: '650px' }}>
        Discover every country, dive into their cultures, and save your favorites in one place.
      </p>

      {/* Stats Cards */}
      <div className="d-flex flex-wrap justify-content-center gap-4 mb-4">
        <div className="card shadow-sm border-0" style={{ width: '180px' }}>
          <div className="card-body">
            <h5 className="card-title text-primary">195</h5>
            <p className="card-text">Countries</p>
          </div>
        </div>
        <div className="card shadow-sm border-0" style={{ width: '180px' }}>
          <div className="card-body">
            <h5 className="card-title text-success">6</h5>
            <p className="card-text">Continents</p>
          </div>
        </div>
        <div className="card shadow-sm border-0" style={{ width: '180px' }}>
          <div className="card-body">
            <h5 className="card-title text-warning">5</h5>
            <p className="card-text">Regions</p>
          </div>
        </div>
      </div>

      {/* Login Button */}
      <Link to="/login" className="btn btn-dark btn-lg">
        Get Started
      </Link>
    </div>
  );
}

export default Welcome;
