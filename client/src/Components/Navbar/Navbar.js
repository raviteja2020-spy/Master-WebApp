import React from "react";
import "./NavbarStyles.css";

function Navbar(props) {
  const menuDetails = props;
  const { menuItems } = menuDetails;
  return (
    <nav className="nav-bar">
      <h1 className="nav-logo">
        <span className="nav-logo-letter">M</span>aster
      </h1>
      <ul className="nav-menu">
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a>{item.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
