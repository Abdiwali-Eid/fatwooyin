import React from 'react';
import { Link } from 'gatsby';
import { HeroSectionStyles } from '../../styles/homePage/HeroSectionStyles';
import ParagraphText from '../typography/ParagraphText';
import Button from '../buttons/Button';



function HeroSection() {
  return (
    <HeroSectionStyles>
   
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <h1 className="hero__heading">waydiiya kuwa cilmiga u leh hadii aydan aqoon</h1>
            <ParagraphText className="hero__text">
              website-kaan waxaad ka heli kartaa su'aalo iyo jawaabo diini ah,sidoo kale waxaad waydiin kartaa su'aalaha diiniga ah oo ay kaaga soo jawaabayaan culimo aqoon leh.
            </ParagraphText>
            <Button to="/question" tag={Link} className="hero__button">
              Waydii su'aal
            </Button>
     
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;
