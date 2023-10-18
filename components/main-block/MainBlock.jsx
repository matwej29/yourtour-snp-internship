import classNames from "../../shared/helpers/classNames";
import styles from "./MainBlock.module.scss";

const MainBlock = ({ children, id, container = true }) => {
  const sectionClassName = container
    ? classNames(styles["main-block-container"])
    : classNames(styles["main-block"]);

  return (
    <section className={sectionClassName} id={id}>
      {children}
    </section>
  );
};

export const MainBlockTitle = ({ children }) => (
  <div className={styles.title}>{children}</div>
);

export const MainBlockDescription = ({ children }) => (
  <div className={styles.description}>{children}</div>
);

export default MainBlock;
