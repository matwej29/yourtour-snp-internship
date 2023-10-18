import Container from "../container/Container";
import List from "../list/List";
import Link from "next/link";

import VkontakteLogo from "../icons/vkontakte/VkontakteLogo";
import FacebookLogo from "../icons/facebook/FacebookLogo";
import InstagramLogo from "../icons/instagram/InstagramLogo";

import styles from "./Footer.module.scss";
import classNames from "../../shared/helpers/classNames";

const FooterList = ({ children }) => (
  <List className={styles.list} itemClassName={styles["list-item"]}>
    {children}
  </List>
);

const FooterLink = ({ href = "#", children }) => (
  <Link className={classNames(styles.link, styles.p_n)} href={href}>
    {children}
  </Link>
);

const Footer = () => (
  <footer className={styles.footer}>
    <Container className={styles.container}>
      <p className={classNames(styles.p_n, styles.p_gray, styles["p_clear-margin"])}>Наши социальные сети</p>
      <FooterList>
        <>
          <InstagramLogo />
          <FooterLink href="#">instagram</FooterLink>
        </>
        <>
          <FacebookLogo />
          <FooterLink href="#">facebook</FooterLink>
        </>
        <>
          <VkontakteLogo />
          <FooterLink href="#">vkontakte</FooterLink>
        </>
      </FooterList>
    </Container>
  </footer>
);

export default Footer;
