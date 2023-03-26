import React from "react";
import "./menu.css";
import MenuList from "./MenuList.jsx";
import "./_fixed/menu_fixed.css";
import "./_fixed/menu_fixed.js";
import "./__logo/menu__logo.css";
import { fixMenuOnScroll } from "./_fixed/menu_fixed";
import debounce from "../../helpers/debounce";

const Menu = () => {
  window.onscroll = debounce(() => fixMenuOnScroll(), 10);

  return (
    <div className="menu">
      <div className="menu__logo"></div>
      <MenuList />
      <a href="tel:+79999999999" className="menu__number p_n p_white">
        +7&nbsp;999&nbsp;999&nbsp;99&nbsp;99
      </a>
    </div>
  );
};

export default Menu;
