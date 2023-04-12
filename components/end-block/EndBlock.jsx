// React component for a corresponding HTML element
import React from "react";
import Link from "../link/Link";

import "./end-block.css";
import EndBlockImage from "../../styles/images/footer photo.jpg";

export const EndBlock = () => (
  <div className="end-block">
    <img className="end-block__image"
         src={EndBlockImage}
         alt="End block image"
    />
    <div className="end-block__text">
      <h3 className="h3">Пора в путешествие вместе с нами!</h3>
      <p className="p_n p_gray p_clear-margin">
        Напиши на почту и узнай подробности на
        <Link href="mailto:yourtour@gmail.com"
              linkType="email"
        >
          yourtour@gmail.com
        </Link>
      </p>
    </div>
  </div>
);

export default EndBlock;
