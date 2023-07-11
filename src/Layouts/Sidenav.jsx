import React from "react";
import Image from "../Assets/Hit.logo.png";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faUsersLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";

const Sidenav = ({ show }) => {


  return (
    <div className={`left-side ${show ? "toggle" : ""}`}>
      <div className="logo">
        <img src={Image} alt="" />
      </div>

      <div className="profile">
        <div className="profile-details">
          <FontAwesomeIcon icon={faUser} className="profile-pic" />
          <div className="container">
            <h4>{localStorage.getItem("username")}</h4>
          </div>
        </div>
      </div>
      <div className="nav-contents">
        <ul className="nav-items">
          <NavLink to="teacher" className="teachers" activeClassName="active">
            <FontAwesomeIcon icon={faUserTie} />
            <span className="field">Teachers</span>
          </NavLink>
          <NavLink to="student" className="teachers">
            <FontAwesomeIcon icon={faUser} />
            <span className="field">Students</span>
          </NavLink>
          <NavLink to="academics" className="teachers">
            <FontAwesomeIcon icon={faGraduationCap} />
            <span className="field">Academics</span>
          </NavLink>
          <NavLink to="placements" className="teachers">
            <FontAwesomeIcon icon={faBriefcase} />
            <span className="field">Placements</span>
          </NavLink>
          <NavLink to="alumni" className="teachers">
            <FontAwesomeIcon icon={faUserGraduate} />
            <span className="field">Alumni</span>
          </NavLink>
          <NavLink to="society" className="teachers">
            <FontAwesomeIcon icon={faUsersLine} />
            <span className="field">Society</span>
          </NavLink>
          <NavLink to="notice" className="teachers">
            <FontAwesomeIcon icon={faClipboard} />
            <span className="field">Notice</span>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;
