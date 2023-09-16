import Link from "next/link";

const MenuLink = ({ to, children }) => (
  <Link href={to} className="menu__link p_n p_white">
    {children}
  </Link>
);

export default MenuLink;
