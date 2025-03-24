import React from "react";
import "./WelcomePage.css";
import { Link,useNavigate } from "react-router-dom";
import { use } from "react";

const WelcomePage = () => {

const navigate=useNavigate();


  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Welcome to Educase India</h1>
        
      </div>
      <div>
      <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum in minus sapiente?</h5>
      </div>
      <div className="button-container">
        <button className="register-button" onClick={()=>navigate("/signUp")}>Create Account</button>
        <button className="login-button">Already Registered?
          <Link className="login-link" to="/signIn">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
