import { Link } from 'gatsby';
import React from 'react';
import { menu } from '../constants/menu';
import { socialLinks } from '../constants/socialLinks';
import { FooterStyles } from '../styles/FooterStyles';
import Logo from './Logo';
import ParagraphText from './typography/ParagraphText';

function Footer() {
  return (
    <FooterStyles>
      <div className="container">

        <div className='horizontal'>
            <Logo />
        <ParagraphText className="footer__text">
        Fatwo waa website waxbarasho oo laga heli karo su'aalo iyo jawaabo diini ah, sidoo kalana ay dadku waydiin karaan su'aalaha diinta ku saabsan oo ay kaaga soo jawaabayaan culimo aqoon u leh.
        </ParagraphText>
        <ul className="footer__menuList">
          {menu.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        </div>
        <ul className="footer__socialList">
          {socialLinks.map((item) => (
            <li key={item.name}>
              <a href={item.url}>{item.icon}</a>
            </li>
          ))}
        </ul>
      
      
        <ParagraphText className="copyright">
          © Fatwo {new Date().getFullYear()}. All rights
          reserved
        </ParagraphText>
      </div>
    </FooterStyles>
  );
}

export default Footer;
