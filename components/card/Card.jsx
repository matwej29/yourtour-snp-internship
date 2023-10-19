import classNames from "../../shared/helpers/classNames";
import CardImage from "./__img/CardImage";

import styles from "./Сard.module.scss";

const Card = ({ children, src, isHorizontal = false }) => (
  <div
    className={classNames(
      styles.card,
      isHorizontal ? styles.card_type_horizontal : ""
    )}>
    <div className={styles.content}>{children}</div>
    <CardImage src={src} />
  </div>
);

export default Card;
