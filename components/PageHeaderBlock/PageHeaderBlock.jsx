import { ButtonTour } from "../button/Button";
import { H1 } from "../headings/Headings";
import MainBlock from "../main-block/MainBlock";

const PageHeaderBlock = () => (
  <MainBlock>
    <div className="page-header">
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
