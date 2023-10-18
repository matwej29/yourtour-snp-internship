import styles from './CardFooter.module.scss';

export const CardFooter = ({ children }) => (
  <div className={styles.card__footer}>{children}</div>
);
