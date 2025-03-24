import React from "react";
import "./AccountSettings.css";

const AccountSettings = () => {
  return (
    <div className="account-settings-container">
      <div className="profile-section">
        <img
          src="https://th.bing.com/th/id/OIG2.9O4YqGf98tiYzjKDvg7L"
          alt="Profile"
          className="profile-image"
        />
        <div className="profile-info">
          <h2 className="client-name">John Doe</h2>
          <p className="client-email">johndoe@example.com</p>
        </div>
      </div>
      <p className="account-description">
        Manage your account settings and update your personal information below.
      </p>
    </div>
  );
};

export default AccountSettings;
