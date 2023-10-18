import { H3 } from "../headings/Headings";
import Image from "next/image";

import styles from "./ReviewCard.module.scss";

const ReviewCardPhoto = ({ src }) => (
  <Image
    className={styles.photo}
    src={src}
    alt="review photo"
    width={75}
    height={75}
  />
);

const ReviewCard = ({ children, customer_name, tour_title, photo }) => (
  <div className={styles["review-card"]}>
    <p className={styles.text}>{children}</p>
    <div className={styles.title}>
      <div className={styles.subtitle}>
        <H3>{customer_name}</H3>
        <p className={styles["tour-title"]}>Тур: {tour_title}</p>
      </div>
      <ReviewCardPhoto src={photo} />
    </div>
  </div>
);

export default ReviewCard;
