import React from "react";

import "./footer__link.css";

const FooterLink = ({ href="#",children }) => (
  <a className="footer__link" href={href}>
    {children}
  </a>
);

export default FooterLink;
