import React, { useState } from "react";
import "./topbar.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Login from "../../../pages/Login/login";

function Topbar() {
  const [user, setUser] = useState(true);
  return (
    <div className="top">
      <div className="topIcon">
        <Link to="/" className="link">
          BlogiFy
        </Link>
      </div>
      <div className="menu-container">
        <ul className="top-menu">
          <li className="menu-item">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>

          <li className="menu-item">
            <Link to="/newblog" className="link">
              NEW
            </Link>
          </li>

          <li className="menu-item">
            <Link to="/about" className="link">
              ABOUT
            </Link>
          </li>

          <li className="menu-item">
            <Link to="/contact" className="link">
              CONTACT
            </Link>
          </li>

          <li
            // setting user false
            className="menu-item"
            onClick={() => {
              setUser(false);
            }}
          >
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {/* if user = true show image : else login button */}
        {user ? (
          <Link to="/settings" className="link">
            <img
              src="/assets/images/user_10.jpg"
              alt=""
              className="profile-img"
            />
          </Link>
        ) : (
          <ul className="top-menu">
            <li className="menu-item">
              <Link className="link" to="/login">
                <p>LOGIN</p>
              </Link>
            </li>
            <li className="menu-item">
              <Link className="link" to="/register">
                <p>REGISTER</p>
              </Link>
            </li>
          </ul>
        )}
        <i
          className="search-icon"
          // onclick used just to demonstrate logout (only for development)
          onClick={() => {
            setUser(true);
          }}
        >
          {<FaSearch />}
        </i>
      </div>
    </div>
  );
}

export default Topbar;
