import React from 'react';
import './breadcrums.css';
import black_arrow_icon from '../Assets/black-arrow-icon.png';

const Breadcrums = (props) => {
   const { product } = props;

   return (
      <div className='breadcrum'>
         PAGRINDINIS <img src={black_arrow_icon} alt="arrow icon" />
         E-parduotuvė <img src={black_arrow_icon} alt="arrow icon" />
         {product.category} <img src={black_arrow_icon} alt="arrow icon" />
         {product.name}

      </div>
   )
}

export default Breadcrums
