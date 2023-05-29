// Login.js
import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
          <div className="text-center mt-3">
            <p>
              Don't have an account? <Link to="/signup">Register</Link>
            </p>
            <Link to="/" className="btn btn-link">
              Back to Home
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
