
import MenuLink from "./MenuLink";
import List from "../list/List";

const MenuList = () => (
  <nav>
    <List className="menu__list" itemClassName="menu__list-elem">
      <MenuLink to="#tours">Туры</MenuLink>
      <MenuLink to="#create-tour">Создать тур</MenuLink>
      <MenuLink to="#reviews">Отзывы</MenuLink>
      <MenuLink to="#histories">Истории</MenuLink>
    </List>
  </nav>
);

export default MenuList;
