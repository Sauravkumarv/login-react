import React from "react";
import "./CreateAccount.css";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {

const navigate=useNavigate();

  return (
    <div className="create-account-container">
      <h1 className="create-account-title">Create Your Account</h1>
      <form className="create-account-form">
        <input type="text" placeholder="Full Name" className="form-input" />
        <input type="tel" placeholder="Phone Number" className="form-input" />
        <input type="email" placeholder="Email Address" className="form-input" />
        <input type="password" placeholder="Password" className="form-input" />
        <input type="text" placeholder="Company Name" className="form-input" />
        <div className="radio-group">
          <label>Are you a business owner?</label>
          <div>
            <input type="radio" id="yes" name="business" value="yes" />
            <label htmlFor="yes">Yes</label>
            <input type="radio" id="no" name="business" value="no" />
            <label htmlFor="no">No</label>
          </div>
        </div>
        <button type="submit" className="create-account-button" onClick={()=>navigate("/signIn")}>Create Account</button>
      </form>
    </div>
  );
};

export default CreateAccount;
