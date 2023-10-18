import PhotoSection from "../photo/Photo";
import MainBlock, {
  MainBlockTitle,
  MainBlockDescription,
} from "../main-block/MainBlock";
import { H2 } from "../headings/Headings";

// TODO: возможно, стоит перенести сюда содержимое PhotoSection.jsx
const PhotoBlock = () => (
  <MainBlock container={false} id="photo">
    <MainBlockTitle>
      <H2>Фотографии путешествий</H2>
      <MainBlockDescription>
        Идейные соображения высшего порядка, <br />а также рамки и место
        обучения кадров
      </MainBlockDescription>
    </MainBlockTitle>

    <PhotoSection />
  </MainBlock>
);

export default PhotoBlock;
