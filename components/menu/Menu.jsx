import React, { useEffect } from "react";
import List from "../list/List";
import Link from "next/link";
import debounce from "../../shared/helpers/debounce";

import styles from "./Menu.module.scss";

function fixMenuOnScroll(menuRef) {
  const menu = menuRef.current;
  if (!menu) return;
  if (window.scrollY >= 450) {
    menu.classList.remove(styles.menu);
    menu.classList.add(styles.menu_fixed);
  } else {
    menu.classList.remove(styles.menu_fixed);
    menu.classList.add(styles.menu);
  }
}

const MenuLink = ({ to, children }) => (
  <Link href={to} className={styles.link}>
    {children}
  </Link>
);

const MenuList = () => (
  <nav>
    <List className={styles.list} itemClassName={styles["list-elem"]}>
      <MenuLink to="#tours">Туры</MenuLink>
      <MenuLink to="#create-tour">Создать тур</MenuLink>
      <MenuLink to="#reviews">Отзывы</MenuLink>
      <MenuLink to="#histories">Истории</MenuLink>
    </List>
  </nav>
);

const Menu = () => {
  const menu = React.createRef();

  useEffect(() => {
    window.onscroll = debounce(() => fixMenuOnScroll(menu), 10);
  }, [menu]);

  return (
    <div className={styles.menu} ref={menu}>
      <div className={styles.logo}></div>
      <MenuList />
      <a href="tel:+79999999999" className={styles.number}>
        +7&nbsp;999&nbsp;999&nbsp;99&nbsp;99
      </a>
    </div>
  );
};

export default Menu;
