import React, { useContext } from "react";
import "./navbar.style.css";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
import firebaseConfig from "../../firebase";

export default function Navbar() {
  const {currentUser} = useContext(AuthContext);
  const history = useHistory();
  const signOut = () => {
    firebaseConfig.auth().signOut();
    history.push("/");
  }
  const checkLogin = () => {
    return currentUser ? 
      (<div className="nav-item" onClick={signOut}>Sign Out</div>) :
      (
        <NavLink
            className="nav-item"
            exact
            to="/login"
            activeClassName="nav-active-item"
          >
            Sign In
          </NavLink>
      )
  }
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
          {checkLogin()}
        </div>
      </div>
    </nav>
  );
}
