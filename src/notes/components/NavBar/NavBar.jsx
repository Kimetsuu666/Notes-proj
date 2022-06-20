import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  return (
    <nav>
      <NavLink className="nav-link" to="/">
        {({ isActive }) => (
          <span style={isActive ? { color: "orange" } : null}>Create Note</span>
        )}
      </NavLink>
      <NavLink className="nav-link" to="/notes">
        {({ isActive }) => (
          <span style={isActive ? { color: "orange" } : null}>Notes</span>
        )}
      </NavLink>
    </nav>
  );
}

export default NavBar;
