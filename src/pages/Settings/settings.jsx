import React from "react";
import "./settings.css";
import { FaUserAlt } from "react-icons/fa";

function Settings() {
  return (
    <div className="settings-container">
      <div className="settings-title">
        <span className="update-title">Update Your Account</span>
        <span className="update-title">Delete Your Account</span>
      </div>
      <form className="settings-form">
        <label>Profile Picture</label>
        <div className="settings-profilePicture">
          <img src="/assets/images/user_10.jpg" alt="user-profile-picture" />
          <label htmlFor="fileInput">
            <i className="user-icon">
              <FaUserAlt />
            </i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
        </div>
        <label>Username</label>
        <input type="text" placeholder="Enter your username" />
        <label>Email</label>
        <input type="text" placeholder="Enter your email" />
        <label>Password</label>
        <input type="text" placeholder="Enter your password" />
        <button className="submit-btn">Update</button>
      </form>
    </div>
  );
}

export default Settings;
