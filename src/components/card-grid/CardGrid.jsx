// React component for a corresponding HTML element
import React from "react";

import "./card-grid.css";
import "./card-grid_type_one-column.css";

export const CardGridHorizontal = ({ children }) => (
  <div className="list card-grid">
    {children}
  </div>
);

const CardGridVertical = ({ children }) => (
  <div className="list card-grid card-grid_type_one-column">
    {children}
  </div>
);

export default CardGridVertical;
