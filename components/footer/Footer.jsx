import Container from "../container/Container";

import FooterList from "./__list/FooterList";
import FooterListItem from "./__list-item/FooterListItem";
import FooterLink from "./__link/FooterLink";

import VkontakteLogo from "../icons/vkontakte/VkontakteLogo";
import FacebookLogo from "../icons/facebook/FacebookLogo";
import InstagramLogo from "../icons/instagram/InstagramLogo";

const Footer = () => (
  <footer className="footer">
    <Container className="footer-container">
      <p className="p_n p_gray p_clear-margin">Наши социальные сети</p>
      <FooterList>
        <FooterListItem>
          <InstagramLogo />
          <FooterLink href="#">instagram</FooterLink>
        </FooterListItem>
        <FooterListItem>
          <FacebookLogo />
          <FooterLink href="#">facebook</FooterLink>
        </FooterListItem>
        <FooterListItem>
          <VkontakteLogo />
          <FooterLink href="#">vkontakte</FooterLink>
        </FooterListItem>
      </FooterList>
    </Container>
  </footer>
);

export default Footer;
