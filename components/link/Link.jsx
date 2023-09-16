export const Link = ({ children, href, linkType, className }) => (
  <a className={`link ${className}`} href={href} type={linkType}>
    {children}
  </a>
);

export default Link;
