import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SubHome from "./SubHome";
import reactLogo from "./reactlogo.png";


const Home = () => {
  const [data, setData] = useState("subhome");
  console.log("test", data);

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div className="container">
      {/* <button onClick={() => {
        setData("asdsad")
      }}>click</button>
      {data} */}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <div className="text-center">
                <img src={reactLogo} alt="React Logo" className="mb-4" style={{ width: "100px" }} />
              </div>
              <h2 className="card-title mb-4" style={{ textAlign: "center", fontFamily: "monospace" }}>
                Welcome to the User Login React App
              </h2>
              <p className="card-text" style={{ textAlign: "center", fontFamily: "monospace" }}>
                You are on the Home page, you can log in or Sign up if you went, we are happy for you to join us.
              </p>
              <div className="text-center">
              <button className="btn btn-primary btn-lg me-4" style={{ fontFamily: "monospace" }} onClick={handleLoginClick} >Login</button>
              <button className="btn btn-primary btn-lg me-4" style={{ fontFamily: "monospace" }} onClick={handleSignUpClick}>Sign Up</button>
              </div>
              <SubHome data={data} setdata={setData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
