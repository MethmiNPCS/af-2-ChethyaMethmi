import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "../Styles/AuthPages.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/allcountries"); // Redirect after login
    } catch (err) {
      setError("Failed to log in. " + err.message);
    }
    setLoading(false);
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <span className="auth-pill">Welcome back</span>
          <h2>Log in to continue</h2>
          <p>Explore countries, save favorites, and keep your travel list handy.</p>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-floating auth-field">
            <input
              type="email"
              placeholder="Email"
              ref={emailRef}
              className="form-control"
              id="floatingEmail"
              required
            />
            <label htmlFor="floatingEmail">Email address</label>
          </div>

          <div className="form-floating auth-field">
            <input
              type="password"
              placeholder="Password"
              ref={passwordRef}
              className="form-control"
              id="floatingPassword"
              required
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button disabled={loading} className="auth-button" type="submit">
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <div className="auth-footer">
          <span>Need an account?</span>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
