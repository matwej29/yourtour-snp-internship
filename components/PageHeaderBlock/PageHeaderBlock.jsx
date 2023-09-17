import { ButtonTour } from "../button/Button";
import { H1 } from "../headings/Headings";
import MainBlock from "../main-block/MainBlock";
import Image from "next/image";

const PageHeaderBlock = () => (
  <MainBlock>
    <div className="page-header">
      <Image
        src="/images/header-img.jpg"
        alt="page-header"
        style={{ position: "absolute", zIndex: -1, objectFit: "cover", objectPosition: "center" }}
        fill
        priority
      />
      <div className="page-header__content">
        <H1 className="h1 p_white text-center">
          Идеальные путешествия существуют
        </H1>
        <p className="p_n p_white text-center p_clear-margin">
          Идейные соображения высшего порядка, а также рамки и место обучения
          кадров
        </p>
        <ButtonTour className="p_s">Найти тур</ButtonTour>
      </div>
    </div>
  </MainBlock>
);

export default PageHeaderBlock;
