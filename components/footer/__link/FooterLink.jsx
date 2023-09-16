
import Link from "next/link";

const FooterLink = ({ href = "#", children }) => (
  <Link className="footer__link p_n" href={href}>
    {children}
  </Link>
);

export default FooterLink;
