import React from 'react';
import './offers.css';
import exclusive_image from '../Assets/exclusive-img.png';

const Offers = () => {
   return (
      <div className='offers'>
         <div className="offers-left">
            <h1>Išskirtiniai <br />pasiūlymai tau</h1>
            <p>Tik perkamiausi produktai </p>

            <button>Peržiūrėti dabar</button>
         </div>
         <div className="offers-right">
            <img src={exclusive_image} alt="exclusive image" />
         </div>
      </div>
   )
}

export default Offers
