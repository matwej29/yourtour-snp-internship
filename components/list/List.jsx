import classNames from "../../shared/helpers/classNames";

import styles from "./List.module.scss";

export const ListItem = ({ children, className = "" }) => (
  <li className={classNames(styles.item, className)}>{children}</li>
);

const List = ({
  children,
  className = "",
  itemClassName = "",
  wrapped = true,
}) => {
  const listStyles = classNames(className ?? styles.clear_list, styles.list)

  if (!wrapped) return <ul className={listStyles}>{children}</ul>;

  return (
    <ul className={listStyles}>
      {children &&
        children.map((child, index) => (
          <ListItem className={itemClassName} key={index}>
            {child}
          </ListItem>
        ))}
    </ul>
  );
};

export default List;
