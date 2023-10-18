import MainBlock, {
  MainBlockDescription,
  MainBlockTitle,
} from "../main-block/MainBlock";
import { H2, H3 } from "../headings/Headings";
import CardGrid from "../card-grid/CardGrid";
import Card from "../card/Card";
import { CardFooter } from "../card/__footer/CardFooter";
import { CardLinks } from "../card/__links/CardLinks";
import { CardLink } from "../card/__link/CardLink";
import { ButtonText } from "../button/Button";
import Arrow from "../icons/arrow/Arrow";

import styles from "./HistoriesBlock.module.scss";
import classNames from "../../shared/helpers/classNames";

const History = ({ title, description, theses, img_src, links }) => (
  <Card src={img_src} isHorizontal={true}>
    <div>
      <H3 className={styles.p_white}>{title}</H3>
      <div>
        <p className={classNames(styles.p_s, styles.p_white)}>{description}</p>
        <ul>
          {theses.map((thesis, index) => (
            <li key={index} className={classNames(styles.p_s, styles.p_white)}>
              {thesis}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <CardFooter>
      <ButtonText>
        <span className={classNames(styles.p_b, styles.p_white)}>
          Подробнее
        </span>
        <Arrow />
      </ButtonText>
      <CardLinks>
        {links.map((link, index) => (
          <CardLink key={index} href={link.href}>
            {link.name}
          </CardLink>
        ))}
      </CardLinks>
    </CardFooter>
  </Card>
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
  <MainBlock id="histories" container={false}>
    <MainBlockTitle>
      <H2>Истории путешествий</H2>
      <MainBlockDescription>
        Идейные соображения высшего порядка, <br />а также рамки и место
        обучения кадров
      </MainBlockDescription>
    </MainBlockTitle>
    <CardGrid>
      {HistoriesData.map((history, index) => (
        <History {...history} key={index} />
      ))}
    </CardGrid>
  </MainBlock>
);

export default HistoriesBlock;
