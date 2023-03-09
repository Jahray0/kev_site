import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logoKevSite from "../assets/logoKevSite.png";

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="/">
            <img
              className="logoNav"
              src={logoKevSite}
              alt="Bannière à propos"
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/Activitees">Activitées</NavLink>
        </li>
        <li>
          <NavLink to="/QuiSuisJe">Qui suis-je</NavLink>
        </li>
        <li>
          <NavLink to="/ContactForm">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
