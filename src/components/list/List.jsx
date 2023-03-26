import React from "react";
import "./list.css";

const List = ({ children, className }) => (
  <ul className={`list ${className}`}>{children}</ul>
);

export default List;
