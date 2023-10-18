import styles from "./CardLinks.module.scss";

export const CardLinks = ({ children }) => (
  <div className={styles.card__links}>{children}</div>
);
