import Link from "../link/Link";
import Image from "next/image";
import { H3 } from "../headings/Headings";
import MainBlock from "../main-block/MainBlock";

import styles from "./EndBlock.module.scss";
import classNames from "../../shared/helpers/classNames";

// TODO: возможно, стоит переименовать в contact-block
const EndBlock = () => (
  <MainBlock>
    <div className={styles["end-block"]}>
      <div className={styles.image}>
        <Image src="/images/footer photo.jpg" alt="Contact us image" fill />
      </div>
      <div className={styles.text}>
        <H3>Пора в путешествие вместе с нами!</H3>
        <p
          className={classNames(
            styles.p_n,
            styles.p_gray,
            styles["p_clear-margin"]
          )}>
          Напиши на почту и узнай подробности на{" "}
          <Link
            href="mailto:yourtour@gmail.com"
            linkType="email"
            className={styles.p_black}>
            yourtour@gmail.com
          </Link>
        </p>
      </div>
    </div>
  </MainBlock>
);

export default EndBlock;
