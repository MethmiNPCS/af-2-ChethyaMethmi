// src/Pages/Welcome.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Welcome.css';

function Welcome() {
  return (
    <div className="welcome-page">
      <div className="welcome-backdrop" aria-hidden="true">
        <span className="welcome-grid" />
        <span className="welcome-spot spot-one" />
        <span className="welcome-spot spot-two" />
      </div>

      <section className="welcome-hero">
        <div className="welcome-left">
          <span className="welcome-kicker">HelloCountries Atlas</span>
          <h1 className="welcome-title">
            Plan your next
            <span>country hop.</span>
          </h1>
          <p className="welcome-subtitle">
            Discover every country, dive into cultures, and save your favorites in one place.
            Start with a region or search by name.
          </p>

          <div className="welcome-actions">
            <Link to="/allcountries" className="welcome-primary">
              Start Exploring
            </Link>
            <Link to="/login" className="welcome-secondary">
              Sign In
            </Link>
          </div>

          <div className="welcome-badges">
            <span>195 Countries</span>
            <span>6 Continents</span>
            <span>5 Regions</span>
          </div>
        </div>

        <div className="welcome-right">
          <div className="welcome-feature-grid">
            <div className="welcome-feature">
              <span>Smart Filters</span>
              <strong>Narrow by language or region.</strong>
            </div>
            <div className="welcome-feature">
              <span>Details That Matter</span>
              <strong>Flags, capitals, timezones, and more.</strong>
            </div>
            <div className="welcome-feature">
              <span>Your Wishlist</span>
              <strong>Save favorites and revisit anytime.</strong>
            </div>
          </div>

          <div className="welcome-highlight">
            <span>Featured Journey</span>
            <strong>Build a wishlist of favorites</strong>
            <p>Track countries you love and plan visits with ease.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Welcome;
