import React from 'react';
import './hero.css';
import hand_icon from '../Assets/hand-icon.png';
import arrow_icon from '../Assets/arrow-icon.png';
import hero_image from '../Assets/hero-image.png';

const Hero = () => {
   return (
      <div className='hero'>
         <div className="hero-left">
            <h2>Nauji gaminiai</h2>
            <div>
               <div className="hero-hand-icon">
                  <p>naujienos</p>
                  <img src={hand_icon} alt="hand icon" />
               </div>
               <p>šventėms</p>
               <p>ir kasdienai</p>
            </div>
            <div className="hero-latest-btn">
               <div>Naujausi gaminiai</div>
               <img src={arrow_icon} alt="arrow icon" />
            </div>
         </div>
         <div className="hero-right">
            <img src={hero_image} alt="hero image" />
         </div>
      </div>
   )
}

export default Hero
