import { NavLink } from "react-router-dom";
import React from "react";


const Menu = () => {
  return (
    <div className="Menu">
      <ul>
      <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "activeLick" : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projet-react"
            className={({ isActive }) => (isActive ? "activeLick" : undefined)}
          >
            CV IBO Malik
          </NavLink>
        </li>
        
        <li>
          <NavLink
            to="/add"
            className={({ isActive }) => (isActive ? "activeLick" : undefined)}
          >
            choisie
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/list"
            className={({ isActive }) => (isActive ? "activeLick" : undefined)}
          >
            comfirmation
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
