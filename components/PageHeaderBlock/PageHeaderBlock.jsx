import Button from "../button/Button";
import { H1 } from "../headings/Headings";
import MainBlock from "../main-block/MainBlock";
import Image from "next/image";
import classNames from "../../shared/helpers/classNames";

import styles from "./PageHeaderBlock.module.scss";
import typography from "../../shared/styles/typography.module.scss";

const ButtonTour = ({ children, onClick }) => (
  <Button className={styles.button_tour} onClick={onClick}>
    {children}
  </Button>
);

const PageHeaderBlock = () => (
  <MainBlock>
    <div className={styles["page-header"]}>
      <Image
        src="/images/header-img.jpg"
        alt="page header image"
        style={{
          position: "absolute",
          zIndex: -1,
          objectFit: "cover",
          objectPosition: "center",
        }}
        fill
        priority
      />
      <div className={styles.content}>
        <H1
          className={classNames(typography.p_white, typography["text-center"])}>
          Идеальные путешествия существуют
        </H1>
        <p
          className={classNames(
            typography.p_white,
            typography["text-center"],
            typography.p_n,
            typography["p_clear-margin"]
          )}>
          Идейные соображения высшего порядка, а также рамки и место обучения
          кадров
        </p>
        <ButtonTour>Найти тур</ButtonTour>
      </div>
    </div>
  </MainBlock>
);

export default PageHeaderBlock;
