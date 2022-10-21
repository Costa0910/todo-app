import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const NavLinks = () => {
  let activeStyle = {
    color: "black",
  };
  return (
    <div className="main">
      <h1>#todo</h1>
      <nav>
        <ul className="links">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            end
          >
            <li>All</li>
          </NavLink>
          <NavLink
            to="/active"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <li>Active</li>
          </NavLink>
          <NavLink
            to="/completed"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <li>Completed</li>
          </NavLink>
        </ul>
      </nav>
      <Outlet />
      <div className="actor">
        <p>Created by Armando Costa - devChallenges</p>
      </div>
    </div>
  );
};

export default NavLinks;
