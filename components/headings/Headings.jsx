import classNames from "../../shared/helpers/classNames";
import styles from "../../shared/styles/typography.module.scss";

export const H1 = ({ children, className = "" }) => (
  <h1 className={classNames(styles.h1, className)}>{children}</h1>
);

export const H2 = ({ children, className = "" }) => (
  <h2 className={classNames(styles.h2, className)}>{children}</h2>
);

export const H3 = ({ children, className = "" }) => (
  <h3 className={classNames(styles.h3, className)}>{children}</h3>
);
