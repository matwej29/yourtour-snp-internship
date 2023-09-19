import NavigationTab from "../NavigationTab/NavigationTab";
import { H3 } from "../headings/Headings";
import Arrow from "../icons/arrow/Arrow";
import MainBlock from "../main-block/MainBlock";
import Card from "../card/Card";
import { CardGridHorizontal } from "../card-grid/CardGrid";
import CardImage from "../card/__img/CardImage";
import { ButtonDetails } from "../button/Button";

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
  <div className="card__content">{children}</div>
);

const ToursBlock = () => (
  <MainBlock id="tours">
    <div className="main-block__title">
      <h2 className="h2 text-center">Выбери свой тур</h2>
      <NavigationTab />
    </div>
    <CardGridHorizontal>
      {card_content_list.map((card_content, index) => (
        <Card src={card_content.img} key={index}>
          <CardContent>
            <div>
              <H3 className="h3 card__title p_white">{card_content.title}</H3>
              <p className="p_s p_white">от {card_content.price} руб</p>
            </div>
            <ButtonDetails>
              <span className="p_b p_white">Подробнее</span>
              <Arrow />
            </ButtonDetails>
          </CardContent>
        </Card>
      ))}
    </CardGridHorizontal>
  </MainBlock>
);

export default ToursBlock;
