import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

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
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  }

  return (
    <div className="container" style={{ maxWidth: 400, marginTop: 100 }}>
      <h2 className="mb-4">Log In</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          ref={emailRef}
          className="form-control mb-3"
          required
        />
        <input
          type="password"
          placeholder="Password"
          ref={passwordRef}
          className="form-control mb-3"
          required
        />
        <button disabled={loading} className="btn btn-primary w-100" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}
