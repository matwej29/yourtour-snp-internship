import MainBlock, { MainBlock__description, MainBlock__title } from "../main-block/MainBlock";
import { H2, H3 } from "../headings/Headings";
import CardGridVertical from "../card-grid/CardGrid";
import { CardHorizontal } from "../card/Card";
import { ButtonDetails } from "../button/Button";
import Link from "next/link";
import Arrow from "../icons/arrow/Arrow";

const History = ({ title, description, theses, img_src, links }) => (
  <CardHorizontal src={img_src}>
    <div>
      <H3 className="h3 card__title p_white">{title}</H3>
      <div>
        <p className="p_s p_white">{description}</p>
        <ul>
          {theses.map((thesis, index) => (
            <li key={index} className="p_s p_white">
              {thesis}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="card__footer">
      <ButtonDetails>
        <span className="p_b p_white">Подробнее</span>
        <Arrow />
      </ButtonDetails>
      <div className="card__links">
        {links.map((link, index) => (
          <Link key={index} href={link.href} className="p_n card__link">
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  </CardHorizontal>
);

const HistoriesData = [
  {
    title: "Автостопом в Стамбул",
    description:
      "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:",
    theses: ["вкусная еда", "дешевый транспорт", "красивый город."],
    img_src: "/images/story photo-1.jpg",
    links: [
      {
        name: "instagram",
        href: "#",
      },
      {
        name: "facebook",
        href: "#",
      },
      {
        name: "Youtube",
        href: "#",
      },
    ],
  },
  {
    title: "Автостопом в Стамбул",
    description:
      "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:",
    theses: ["вкусная еда", "дешевый транспорт", "красивый город."],
    img_src: "/images/story photo-2.jpg",
    links: [
      {
        name: "instagram",
        href: "#",
      },
      {
        name: "Вконтакте",
        href: "#",
      },
    ],
  },
  {
    title: "Автостопом в Стамбул",
    description:
      "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:",
    theses: ["вкусная еда", "дешевый транспорт", "красивый город."],
    img_src: "/images/story photo-3.jpg",
    links: [
      {
        name: "instagram",
        href: "#",
      },
      {
        name: "facebook",
        href: "#",
      },
      {
        name: "Вконтакте",
        href: "#",
      },
    ],
  },
];

const HistoriesBlock = () => (
  <MainBlock id="histories">
    <MainBlock__title>
      <H2>Истории путешествий</H2>
      <MainBlock__description>
        Идейные соображения высшего порядка, <br />а также рамки и место
        обучения кадров
      </MainBlock__description>
    </MainBlock__title>
    <CardGridVertical>
      {HistoriesData.map((history, index) => (
          <History {...history} key={index}/>
      ))}
    </CardGridVertical>
  </MainBlock>
);

export default HistoriesBlock;
