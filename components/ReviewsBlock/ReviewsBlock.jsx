import MainBlock, {MainBlockTitle, MainBlockDescription} from "../main-block/MainBlock";
import { H2 } from "../headings/Headings";
import ReviewCard from "../review-card/ReviewCard";

import styles from './ReviewsBlock.module.scss';

const ReviewSection = () => (
  <div className={styles.grid}>
    <ReviewCard
      customer_name="Мария"
      tour_title="Вдали от дома"
      photo="/images/review photo-1.jpg">
      Идейные соображения высшего порядка, а также рамки и место обучения кадров
      обеспечивает широкому кругу (специалистов) участие в формировании новых
      предложений. Идейные соображения высшего порядка, а также начало
      повседневной работы по формированию позиции позволяет оценить значение
      модели развития.
    </ReviewCard>
    <ReviewCard
      customer_name="Павел"
      tour_title="Путешествие в горы"
      photo="/images/review photo-2.jpg">
      Равным образом постоянный количественный рост и сфера нашей активности
      играет важную роль в формировании системы обучения кадров, соответствует
      насущным потребностям.
      <br />
      <br />
      Значимость этих проблем настолько очевидна, что дальнейшее развитие
      различных форм деятельности обеспечивает широкому кругу (специалистов)
      участие в формировании новых предложений. Повседневная практика
      показывает, что реализация намеченных плановых заданий в значительной
      степени обуславливает создание модели развития.
    </ReviewCard>
  </div>
);

const ReviewsBlock = () => (
  <MainBlock id="reviews">
    <MainBlockTitle>
      <H2>
        Отзывы наших <br />
        путешественников
      </H2>
      <MainBlockDescription>
        Идейные соображения высшего порядка, <br />а также рамки и место
        обучения кадров
      </MainBlockDescription>
    </MainBlockTitle>

    <ReviewSection />
  </MainBlock>
);

export default ReviewsBlock;
