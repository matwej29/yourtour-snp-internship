import React from "react";
import { NavLink } from "react-router-dom";
import "./__link/menu__link.css";
import "./__list-elem/menu__list-elem.css";

const MenuLink = ({ to, children }) => (
  <li className="menu__list-elem">
    <NavLink
      to={to}
      className="menu__link p_n p_white"
      activeClassName="menu__link_active">
      {children}
    </NavLink>
  </li>
);

export default MenuLink;
