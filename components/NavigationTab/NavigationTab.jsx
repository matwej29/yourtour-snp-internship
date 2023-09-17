import Tab from "../tab/Tab";
import Button from "../button/Button";

const NavigationTab = () => (
  <Tab>
    <Button className="p_b" choosed={true}>Популярные</Button>
    <Button className="p_b">Авторские</Button>
    <Button className="p_b">Походы</Button>
    <Button className="p_b">Сплавы</Button>
    <Button className="p_b">Велопрогулки</Button>
  </Tab>
);

export default NavigationTab;
