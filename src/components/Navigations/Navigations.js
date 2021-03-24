import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigations.module.css";

const Navigations = () => {
  return (
    <div className={s.Menu}>
      <ul className={s.NavList}>
        <li>
          <NavLink
            exact
            to="/"
            className={s.NavLink}
            activeClassName={s.NavLinkActive}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={s.NavLink}
            activeClassName={s.NavLinkActive}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigations;
