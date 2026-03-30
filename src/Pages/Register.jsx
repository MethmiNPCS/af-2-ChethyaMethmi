import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "../Styles/AuthPages.css";

export default function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/login"); // After signup, redirect to login page
    } catch (err) {
      setError("Failed to create an account. " + err.message);
    }
    setLoading(false);
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <span className="auth-pill">Create your account</span>
          <h2>Start your journey</h2>
          <p>Save favorites, build your wishlist, and explore the world.</p>
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
              minLength={6}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-floating auth-field">
            <input
              type="password"
              placeholder="Confirm Password"
              ref={passwordConfirmRef}
              className="form-control"
              id="floatingConfirmPassword"
              required
              minLength={6}
            />
            <label htmlFor="floatingConfirmPassword">Confirm Password</label>
          </div>

          <button disabled={loading} className="auth-button" type="submit">
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <div className="auth-footer">
          <span>Already have an account?</span>
          <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
}

