import React from "react";
import "./navbar.style.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-list">
        <div className="nav-left">
          <NavLink
            className="nav-item"
            exact
            to="/"
            activeClassName="nav-active-item"
          >
            Public
          </NavLink>
          <NavLink
            className="nav-item"
            exact
            to="/private"
            activeClassName="nav-active-item"
          >
            Private
          </NavLink>
        </div>
        <div className="nav-right">
          <NavLink
            className="nav-item"
            exact
            to="/login"
            activeClassName="nav-active-item"
          >
            Sign In
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
