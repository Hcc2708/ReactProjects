import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
export default function Headers() {
  return (
    <div>
      <header className="header1">
       

        <div>
          <NavLink to="/" className="Nav">About</NavLink>
        </div>
        <div>
          <NavLink to="/contact" className="Nav">Contact</NavLink>
        </div>
        <div>
          <NavLink to="/projects" className="Nav">Projects</NavLink>
        </div>
      </header>
    </div>
  );
}
