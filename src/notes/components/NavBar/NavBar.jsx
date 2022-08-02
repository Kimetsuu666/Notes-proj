import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  return (
    <nav>
      <NavLink className="nav-link" to="/">
        {({ isActive }) => (
          <span className={isActive ? "nav-link-active" : null}>
            Create Note
          </span>
        )}
      </NavLink>
      <NavLink className="nav-link" to="/notes">
        {({ isActive }) => (
          <span className={isActive ? "nav-link-active" : null}>Notes</span>
        )}
      </NavLink>
    </nav>
  );
}

export default NavBar;
