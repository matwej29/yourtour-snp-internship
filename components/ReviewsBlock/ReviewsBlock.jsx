import MainBlock, {MainBlock__title, MainBlock__description} from "../main-block/MainBlock";
import { H2 } from "../headings/Headings";
import ReviewSection from "../ReviewSection/ReviewSection.jsx";

const ReviewsBlock = () => (
  <MainBlock id="reviews">
    <MainBlock__title>
      <H2>
        Отзывы наших <br />
        путешественников
      </H2>
      <MainBlock__description>
        Идейные соображения высшего порядка, <br />а также рамки и место
        обучения кадров
      </MainBlock__description>
    </MainBlock__title>

    <ReviewSection />
  </MainBlock>
);

export default ReviewsBlock;
