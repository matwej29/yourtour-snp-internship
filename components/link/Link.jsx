import * as NextLinkComponent from "next/link";
const NextLink = NextLinkComponent.default;

import styles from './Link.module.scss';
import classNames from "../../shared/helpers/classNames";

export const Link = ({ children, href, linkType, className="" }) => (
  <NextLink className={classNames(styles.link, className)} href={href} type={linkType}>
    {children}
  </NextLink>
);

export default Link;
