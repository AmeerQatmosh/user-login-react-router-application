import React from "react";
import { Link } from "react-router-dom";
import reactLogo from "./logo192.png"; // Replace with your React logo image path

export default function Home() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <div className="text-center">
                <img src={reactLogo} alt="React Logo" className="mb-4" style={{ width: "100px" }} />
              </div>
              <h2 className="card-title mb-4" style={{textAlign: "center" , fontFamily: "monospace"}}>Welcome to the User Login React App </h2>
              <p className="card-text" style={{textAlign: "center", fontFamily: "monospace"}}>
              You are on the Home page, you can log in or Sign up if you went, we are happy for you to join us.
              </p>
              <div className="text-center">
                <Link to="/login" className="btn btn-primary btn-lg me-4" style={{fontFamily: "monospace"}}>
                  Login
                </Link>
                <Link to="/signup" className="btn btn-outline-primary btn-lg" style={{fontFamily: "monospace"}}>
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}