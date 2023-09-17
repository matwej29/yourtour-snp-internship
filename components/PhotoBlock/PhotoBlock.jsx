import PhotoSection from "../photo/Photo";
import MainBlock from "../main-block/MainBlock";

// TODO: возможно, стоит перенести сюда содержимое PhotoSection.jsx
const PhotoBlock = () => (
  <MainBlock container={false} id="photo">
    <PhotoSection />
  </MainBlock>
);

export default PhotoBlock;
