import React from "react";
import "./register.css";
import { FaFacebookF, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="box-form">
      <div className="left">
        <div className="overlay">
          <h1>Welcome to BlogiFy</h1>
          <p>Start your blogging journey!!</p>
          <div className="social-register">
            <i className="social-icon">{<FaFacebookF />}</i>
            <i className="social-icon">{<FaGithub />}</i>
            <i className="social-icon">{<FaTwitter />}</i>
            <i className="social-icon">{<FaInstagram />}</i>
          </div>
        </div>
      </div>
      <div className="right">
        <h5>Register</h5>
        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
        <form className="register-form">
          {/* <label>Email</label> */}
          <input type="text" placeholder="Enter your email" />
          {/* <label>Username</label> */}
          <input type="text" placeholder="Enter your username" />
          {/* <label>Password</label> */}
          <input type="password" placeholder="Enter your password" />
          <button className="register-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
