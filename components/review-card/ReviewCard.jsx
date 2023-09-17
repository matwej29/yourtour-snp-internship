import "react";

import ReviewCardPhoto from "./__photo/ReviewCardPhoto";
import { H3 } from "../headings/Headings";

// TODO: разнести по отдельным компонентам
const ReviewCard = ({ children, customer_name, tour_title, photo }) => (
  <div className="review-card">
    <p className="review-card__text p_b p_clear-margin">{children}</p>
    <div className="review-card__title">
      <div className="review-card__subtitle">
        <H3>{customer_name}</H3>
        <p className="p_n p_gray p_clear-margin">Тур: {tour_title}</p>
      </div>
      <ReviewCardPhoto src={photo} />
    </div>
  </div>
);

export default ReviewCard;
