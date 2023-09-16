
import List from "../../list/List";
import FooterListItem from "../__list-item/FooterListItem";

const FooterList = ({ children }) => (
  <List className={`footer__list`} itemClassName="footer__list-item">
    {/* {children.map((item, index) => (
      <FooterListItem key={index}>{item}</FooterListItem>
    ))} */}
    {children}
  </List>
);

export default FooterList;
