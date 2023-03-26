import React from "react";
import MenuLink from "./MenuLink.jsx";
import "./__list-elem/menu__list-elem.css";
import "./__list/menu__list.css";
import List from "../list/List.jsx";

const MenuList = () => (
  <nav>
    <List className="menu__list">
      <MenuLink to="#tours">Туры</MenuLink>
      <MenuLink to="#create-tour">Создать тур</MenuLink>
      <MenuLink to="#reviews">Отзывы</MenuLink>
      <MenuLink to="#histories">Истории</MenuLink>
    </List>
  </nav>
);

export default MenuList;
