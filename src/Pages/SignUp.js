import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import reactLogo from "./reactlogo.png";

const SignUp = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // componentDidMount
    console.log("Component mounted");

    return () => {
      // componentWillUnmount
      console.log("Component unmounted");
    };
  }, []);

  useEffect(() => {
    // componentDidUpdate
    console.log("Component updated");
  }, [fullName, email, password]);

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send API request using Axios
    axios
      .post("api_endpoint", { fullName, email, password })
      .then((response) => {
        // Handle successful response
        console.log(response.data);
        navigate("/dashboard"); // Navigate to the dashboard or desired page
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <div className="text-center">
            <img src={reactLogo} alt="React Logo" className="mb-4" style={{ width: "100px" }} />
          </div>
          <h2 className="card-title mb-4" style={{ textAlign: "center", fontFamily: "monospace" }}>
            User Registration React
          </h2>
          <h3 className="Auth-form-title" style={{ fontFamily: "monospace" }}>
            Sign Up
          </h3>
          <div className="form-floating mt-3">
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Enter full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <label htmlFor="fullName" style={{ fontWeight: "normal" }}>
              Full Name
            </label>
          </div>
          <div className="form-floating mt-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Already registered? <a href="#" className="hover-text" onClick={handleLoginClick}>Log in</a>
          </p>
          <div className="text-center mt-3">
            <button className="btn btn-outline-secondary btn-lg me-4" style={{ fontFamily: "monospace" }} onClick={handleHomeClick}>Back to Home</button>
            <p>
              <button className="hover-button" onClick={handleLoginClick}>Log in</button>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
