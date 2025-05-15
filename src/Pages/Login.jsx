import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";

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
    <div
      className="container d-flex flex-column justify-content-center align-items-center"
      style={{ maxWidth: 400, minHeight: "80vh", marginTop: "5rem" }}
    >
      <div className="card shadow-lg p-4 w-100 rounded-4">
        <h2 className="mb-4 text-center fw-bold">Log In</h2>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="email"
              placeholder="Email"
              ref={emailRef}
              className="form-control rounded-3"
              id="floatingEmail"
              required
            />
            <label htmlFor="floatingEmail">Email address</label>
          </div>

          <div className="form-floating mb-4">
            <input
              type="password"
              placeholder="Password"
              ref={passwordRef}
              className="form-control rounded-3"
              id="floatingPassword"
              required
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button
            disabled={loading}
            className="btn btn-primary w-100 py-2 fw-semibold fs-5 rounded-3"
            type="submit"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <div className="text-center mt-4">
          Need an account?{" "}
          <Link to="/signup" className="text-decoration-none fw-semibold">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
