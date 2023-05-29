import React from "react";
import { Link } from "react-router-dom";
import reactLogo from "./logo192.png"; // Replace with your React logo image path

const Login = () => (
  <div className="Auth-form-container">
    <form className="Auth-form">
      <div className="Auth-form-content">
        <div className="text-center">
          <img src={reactLogo} alt="React Logo" className="mb-4" style={{ width: "100px" }} />
        </div>
        <h2 className="card-title mb-4" style={{ textAlign: "center", fontFamily: "monospace" }}>
          User Login React
        </h2>
        <h3 className="Auth-form-title" style={{ fontFamily: "monospace" }}>
          Log In
        </h3>
        <div className="form-floating mt-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
          />
          <label htmlFor="email" style={{ fontWeight: "normal" }}>
            Email address
          </label>
        </div>
        <div className="form-floating mt-3">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
          />
          <label htmlFor="password" style={{ fontWeight: "normal" }}>
            Password
          </label>
        </div>
        <div className="d-grid gap-2 mt-3">
          <button
            type="submit"
            className="btn btn-outline-primary"
            style={{ fontFamily: "monospace" }}
          >
            Submit
          </button>
        </div>
        <p className="forgot-password text-right mt-2">
          Forgot <a href="#" className="hover-text">Password?</a>
        </p>
        <div className="text-center mt-3">
          <p>
            Don't have an account? <Link to="/signup" className="hover-text">Register Now</Link>
          </p>
          <Link to="/" className="btn btn-outline-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </form>
  </div>
);

export default Login;
