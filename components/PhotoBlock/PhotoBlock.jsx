import PhotoSection from "../photo/Photo";
import MainBlock, {
  MainBlock__title,
  MainBlock__description,
} from "../main-block/MainBlock";
import { H2 } from "../headings/Headings";

// TODO: возможно, стоит перенести сюда содержимое PhotoSection.jsx
const PhotoBlock = () => (
  <MainBlock container={false} id="photo">
    <MainBlock__title>
      <H2>Фотографии путешествий</H2>
      <MainBlock__description>
        Идейные соображения высшего порядка, <br />а также рамки и место
        обучения кадров
      </MainBlock__description>
    </MainBlock__title>

    <PhotoSection />
  </MainBlock>
);

export default PhotoBlock;
