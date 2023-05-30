import React from "react";
import "./index.css";
function Header() {
  return (
    <nav className="nav-desktop-view">
      <div className="desktop-logo-view">
        <img
          src="https://master-webapp.s3.ap-south-1.amazonaws.com/logo.png"
          className="desktop-view-logo"
          alt="master-logo"
        />
      </div>
      <div className="nav-desktop-link-view">
        <h1 className="nav-desktop-links">Our Story</h1>
        <h1 className="nav-desktop-links">Blogs</h1>
        <div className="desktop-login-view">
          <img
            src="https://master-webapp.s3.ap-south-1.amazonaws.com/user.png"
            alt="contact"
            className="login-logo"
          />
          <h1 className="nav-desktop-links">Login</h1>
        </div>

        <div>
          <button className="nav-get-started-btn">Get Started</button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
