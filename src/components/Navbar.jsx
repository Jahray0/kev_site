import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <ul>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/">Activitées</NavLink>
        </li>
        <li>
          <NavLink to="/">Qui suis-je</NavLink>
        </li>
        <li>
          <NavLink to="/ContactForm">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
