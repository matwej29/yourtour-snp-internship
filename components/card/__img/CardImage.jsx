import React from "react";

import "./card__img.css";

export const CardImage = ({ src }) => (
  <img className={"card__img"} src={src} alt={"background image"} />
);
