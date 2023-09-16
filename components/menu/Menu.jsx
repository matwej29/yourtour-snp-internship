import React, { useEffect } from "react";
import MenuList from "./MenuList.jsx";
import debounce from "../../helpers/debounce";

function fixMenuOnScroll(menuRef) {
  const menu = menuRef.current;
  if (!menu) return;
  if (window.scrollY >= 450) {
    menu.classList.remove("menu");
    menu.classList.add("menu_fixed");
  } else {
    menu.classList.remove("menu_fixed");
    menu.classList.add("menu");
  }
}

const Menu = () => {
  const menu = React.createRef();
  useEffect(() => {
    window.onscroll = debounce(() => fixMenuOnScroll(menu), 10);
  });

  return (
    <div className="menu" ref={menu}>
      <div className="menu__logo"></div>
      <MenuList />
      <a href="tel:+79999999999" className="menu__number p_n p_white">
        +7&nbsp;999&nbsp;999&nbsp;99&nbsp;99
      </a>
    </div>
  );
};

export default Menu;
