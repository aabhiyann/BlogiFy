import React from "react";
import "./login.css";
import { FaFacebookF, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-box-form">
      <div className="left">
        <div className="overlay">
          <h1>Welcome to BlogiFy</h1>
          <p>Start your blogging journey!!</p>
          <div className="social-login">
            <i className="social-icon">{<FaFacebookF />}</i>
            <i className="social-icon">{<FaGithub />}</i>
            <i className="social-icon">{<FaTwitter />}</i>
            <i className="social-icon">{<FaInstagram />}</i>
          </div>
        </div>
      </div>
      <div className="right">
        <h5>Login</h5>
        <p>
          Don't have an account? <Link to="/register">Join BlogiFy!</Link>
        </p>
        <form className="login-form">
          <input type="text" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your password" />
          <button className="login-btn">Login</button>
          <button className="register-btn">
            <Link to="/register" className="link">
              Register
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
