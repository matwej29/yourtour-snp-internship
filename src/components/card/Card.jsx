// React component for a corresponding in index.html with class="card"
import React from "react";
import "./card.css";
import "./__content/card__content.css";
import "./_type/card_type_horizontal.css";
import CardImage from "./__img/CardImage";

export const CardHorizontal = ({ children, src }) => (
  <div className="card card_horizontal">
    <CardImage src={src} />
    <div className="card__content">{children}</div>
  </div>
);

const Card = ({ children, src }) => (
  <div className="card">
    <div className="card__content">{children}</div>
    <CardImage src={src} />
  </div>
);

export default Card;
