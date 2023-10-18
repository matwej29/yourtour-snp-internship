import Link from "next/link";
import styles from './CardLink.module.scss';

export const CardLink = ({ children, href }) => (
  <Link className={styles.card__link} href={href}>{children}</Link>
);
