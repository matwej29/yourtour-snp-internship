import NavigationTab from "../NavigationTab/NavigationTab";
import { H2, H3 } from "../headings/Headings";
import Arrow from "../icons/arrow/Arrow";
import MainBlock, { MainBlockTitle } from "../main-block/MainBlock";
import Card from "../card/Card";
import CardGrid from "../card-grid/CardGrid";
import { ButtonText } from "../button/Button";

import typography from "../../shared/styles/typography.module.scss";
import classNames from "../../shared/helpers/classNames";
import cardStyles from "../card/Сard.module.scss";

const card_content_list = [
  {
    title: "Путешествие в горы",
    price: "80 000",
    img: "/images/card tour photo-1.jpg",
  },
  {
    title: "Путешествие в горы",
    price: "80 000",
    img: "/images/card tour photo-2.jpg",
  },
  {
    title: "Путешествие в горы",
    price: "80 000",
    img: "/images/card tour photo-3.jpg",
  },
  {
    title: "Путешествие в горы",
    price: "80 000",
    img: "/images/card tour photo-4.jpg",
  },
  {
    title: "Путешествие в горы",
    price: "80 000",
    img: "/images/card tour photo-5.jpg",
  },
  {
    title: "Путешествие в горы",
    price: "80 000",
    img: "/images/card tour photo-6.jpg",
  },
];

const CardContent = ({ children }) => (
  <div className={cardStyles.card__content}>{children}</div>
);

const CardTitle = ({ children }) => (
  <H3 className={classNames(cardStyles.card__title, typography.p_white)}>
    {children}
  </H3>
);

const Price = ({ children }) => (
  <p className={classNames(typography.p_s, typography.p_white)}>{children}</p>
);

const ToursBlock = () => (
  <MainBlock id="tours">
    <MainBlockTitle>
      <H2 className={typography["text-center"]}>Выбери свой тур</H2>
      <NavigationTab />
    </MainBlockTitle>
    <CardGrid isHorisontal={true}>
      {card_content_list.map((card_content, index) => (
        <Card src={card_content.img} key={index}>
          <CardContent>
            <div>
              <CardTitle>{card_content.title}</CardTitle>
              <Price>от {card_content.price} руб</Price>
            </div>
            <ButtonText>
              <span className={classNames(typography.p_b, typography.p_white)}>
                Подробнее
              </span>
              <Arrow />
            </ButtonText>
          </CardContent>
        </Card>
      ))}
    </CardGrid>
  </MainBlock>
);

export default ToursBlock;
