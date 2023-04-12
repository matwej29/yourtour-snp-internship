import React from "react";
import List from "../../list/List";
import FooterListItem from "../__list-item/FooterListItem";

import "./footer__list.css";

const FooterList = ({ children }) => (
  <List className={`footer__list`}>
    {children.map((item, index) => (
      <FooterListItem key={index}>{item}</FooterListItem>
    ))}
  </List>
);

export default FooterList;
