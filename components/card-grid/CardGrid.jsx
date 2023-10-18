import classNames from "../../shared/helpers/classNames";
import List from "../list/List";
import styles from "./CardGrid.module.scss";

const CardGrid = ({ children, isHorisontal = false }) => (
  <List
    className={classNames(
      styles["card-grid"],
      isHorisontal ? "" : styles["card-grid_type_one-column"]
    )}>
    {children}
  </List>
);

export default CardGrid;
