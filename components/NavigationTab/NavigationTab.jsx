import Button from "../button/Button";
import { useState } from "react";

import typography from "../../shared/styles/typography.module.scss";
import styles from "./NavigationTab.module.scss";
import classNames from "../../shared/helpers/classNames";

const NavigationTab = () => {
  const [category, setCategory] = useState("popular");

  const TabElement = ({ categoryName, title }) => (
    <Button
      className={classNames(
        typography.p_b,
        styles.item,
        categoryName === category && styles.item_choosed
      )}
      choosed={categoryName === category}
      onClick={() => setCategory(categoryName)}>
      {title}
    </Button>
  );

  return (
    <div className={styles.tab}>
      <TabElement categoryName="popular" title="Популярные" />
      <TabElement categoryName="authorial" title="Авторские" />
      <TabElement categoryName="hike" title="Походы" />
      <TabElement categoryName="rafting" title="Сплавы" />
      <TabElement categoryName="bikeride" title="Велопрогулки" />
    </div>
  );
};

export default NavigationTab;
