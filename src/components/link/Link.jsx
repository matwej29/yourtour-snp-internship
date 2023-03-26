import React from "react";

import "./link.css";

export const Link = ({ children, href, linkType }) => (
  <a className="link"
     href={href}
     type={linkType}
  >
    {children}
  </a>
);

export default Link;
