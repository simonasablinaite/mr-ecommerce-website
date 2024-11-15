import React from 'react';
import './footer.css';
import logo from '../Assets/logo.png';
import fb_icon from '../Assets/fb-icon.png';
import pinterest_icon from '../Assets/pinterest-icon.png';
import yt_icon from '../Assets/yt-icon.png';

const Footer = () => {
   return (
      <div className='footer'>
         <div className="footer-logo">
            <img src={logo} alt="logo" />
         </div>

         <ul className='footer-links'>
            <li>MR - matoma reklama</li>
            <li>Produktai</li>
            <li>Pasiūlymai</li>
            <li>Apie</li>
            <li>Kontaktai</li>
         </ul>
         <div className="footer-social-icons">
            <div className="footer-icon-container">
               <a href="https://www.facebook.com/people/MR-matoma-reklama/61553965983064/" target='blank'><img src={fb_icon} alt="facebook icon" />
               </a>
            </div>
            <div className="footer-icon-container">
               <a href="#" target='blank'><img src={pinterest_icon} alt="pinterest icon" />
               </a>
            </div>
            <div className="footer-icon-container">
               <a href="#" target='blank'><img src={yt_icon} alt="youtube icon" />
               </a>
            </div>
         </div>
         <hr />
         <div className="footer-copyright">

            <p>Copyright &copy; 2024 - Visos teisės saugomos</p>
         </div>
      </div>
   )
}

export default Footer
