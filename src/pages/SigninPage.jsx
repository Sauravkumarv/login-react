import React from "react";
import "./SigninPage.css";
import { useNavigate } from "react-router-dom";

const SigninPage = () => {


const navigate=useNavigate();

  return (
    <div className="signin-container">
      <h1 className="signin-title">Sign in to your PopX account</h1>
      <p className="signin-description">
        Access your personalized dashboard and explore exclusive features by signing in.
      </p>
      <div className="signin-form">
        <input type="email" placeholder="Email Address" 
        className="signin-input" />
        <input type="password" placeholder="Password" className="signin-input" />
        <button className="signin-button" onClick={()=>navigate("/account")}>Sign In</button>
      </div>
    </div>
  );
};

export default SigninPage;
