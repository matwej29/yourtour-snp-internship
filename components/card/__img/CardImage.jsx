import Image from "next/image";
import styles from './CardImage.module.scss';

const SIZES = "531px 318px";

const CardImage = ({ src }) => (
  <Image
    className={styles.card__img}
    src={src}
    alt={src}
    style={{ top: "auto" }}
    fill
    sizes={SIZES}
  />
);
export default CardImage;
