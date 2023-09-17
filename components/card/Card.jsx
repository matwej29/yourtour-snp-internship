import CardImage from "./__img/CardImage";

export const CardHorizontal = ({ children, src }) => (
  <div className="card card_type_horizontal">
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
