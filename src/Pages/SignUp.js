import React from "react";
import { useNavigate } from "react-router-dom";
import reactLogo from "./reactlogo.png"; 

const SignUp = () => {

  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };
  return (
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
          Sign Up
        </h3>
        <div className="text-center">
          Already registered? <button className="hover-button" onClick={handleLoginClick}>Sign In Now</button>
        </div>
        <div className="form-floating mt-3">
          <input
            type="text"
            className="form-control"
            id="fullName"
            placeholder="e.g John Doe"
          />
          <label htmlFor="fullName" style={{ fontWeight: "normal" }}>Full Name (e.g: John Doe)</label>
        </div>
        <div className="form-floating mt-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email Address"
          />
          <label htmlFor="email" style={{ fontWeight: "normal" }}>Email address</label>
        </div>
        <div className="form-floating mt-3">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
          <label htmlFor="password" style={{ fontWeight: "normal" }}>Password</label>
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
        <p className="text-center mt-2">
          Forgot <a href="#" className="hover-text">Password?</a>
        </p>
        <div className="text-center mt-3">

        <button className="btn btn-outline-secondary btn-lg me-4" style={{ fontFamily: "monospace" }} onClick={handleHomeClick}>Back to Home</button>
        </div>
      </div>
    </form>
  </div>
);
}

export default SignUp;
