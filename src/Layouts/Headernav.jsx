import React from "react";
import { NavLink } from "react-router-dom";
import "../Style/css/main.css";

const 
Headernav = ({show, handletoggle}) => {
  return (
    <div className={`navbar-main ${show?"toggle":""}`} onClick={handletoggle}>
      <div className="main-links">
        <ul className="main-list">
          <NavLink to="/" className="items" activeClassName="active">Home</NavLink>
          <NavLink to="/faculty" className="items">Faculty</NavLink>
          <NavLink to="/academics" className="items">Academics</NavLink>
          <NavLink to="/library" className="items">Library</NavLink>
          <NavLink to="/Placements" className="items">Placements</NavLink>
          <NavLink to="/event" className="items">Events</NavLink>
          <NavLink to="/notice" className="items">Notice</NavLink>
          <NavLink to="/about" className="items">Abouts Us</NavLink>
        </ul>
        <div className="button">
          <NavLink to="/login" className="btn-login">Login</NavLink>
          <NavLink to="/signup" className="btn-signup">Signup</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Headernav;
