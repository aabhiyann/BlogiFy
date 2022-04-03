import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="header-container">
      <h2>BlogiFy - Share Your Blogs</h2>
      {/* <h1>
        <span>"</span> Blog <span>"</span>
      </h1> */}
      <img
        src="/assets/images/typing.png"
        alt="header-cover-picture"
        className="header-img"
      />
      <p>Just keep Blogifyig !</p>
    </header>
  );
}

export default Header;
