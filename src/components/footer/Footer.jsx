import React from 'react';

import FooterList from './__list/FooterList';
import FooterListItem from './__list-item/FooterListItem';
import FooterLink from './__link/FooterLink';

import VkontakteLogo from '../icons/vkontakte/VkontakteLogo';
import FacebookLogo from '../icons/facebook/FacebookLogo';
import InstagramLogo from '../icons/instagram/InstagramLogo';

import './footer.css';

// TODO: возможно стоит создать отдельный компонент под это или перенести класс контейнера
import '../footer-container/footer-container.css';

const Footer = () => (
    <footer className="footer footer-container container">
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

    </footer>
);

export default Footer;
