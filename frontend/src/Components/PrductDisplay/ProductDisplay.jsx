import React, { useContext } from 'react';
import './productDisplay.css';
import star_icon from '../Assets/star-icon.png';
import star_dull_icon from '../Assets/star-dull.png';
import { ShopContext } from '../../Context/ShopContext';


const ProductDisplay = (props) => {
   const { product } = props;
   const { addToCart } = useContext(ShopContext)

   return (
      <div className='product-display'>
         <div className='product-display-left'>
            <div className="product-display-img-list">
               <img src={product.image} alt="product image" />
               <img src={product.image} alt="product image" />
               <img src={product.image} alt="product image" />
               <img src={product.image} alt="product image" />
            </div>

            <div className="product-display-img">
               <img className='product-display-main-img' src={product.image} alt="" />
            </div>
         </div>
         <div className='product-display-right'>
            <h1>{product.name}</h1>
            <div className="product-display-right-stars">
               <img src={star_icon} alt="yellow star icon" />
               <img src={star_icon} alt="yellow star icon" />
               <img src={star_icon} alt="yellow star icon" />
               <img src={star_icon} alt="yellow star icon" />
               <img src={star_dull_icon} alt="black star icon" />
               <p>(122)</p>
            </div>
            <div className="product-display-right-prices">
               <div className='product-display-right-price-old'>{product.old_price}€</div>
               <div className='product-display-right-price-new'>{product.new_price}€</div>
            </div>
            <div className="product-display-right-description">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni aliquam placeat temporibus nostrum quaerat perspiciatis ratione eligendi similique. Repudiandae possimus harum alias cupiditate maxime iure sint facilis ipsam dolorum!
            </div>
            <div className="product-display-right-size">
               <h1>Pasirinkite dydį</h1>
               <div className="product-display-right-sizes">
                  <div>S</div>
                  <div>M</div>
                  <div>L</div>
                  <div>XL</div>
                  <div>XXL</div>
               </div>
            </div>
            <button onClick={() => { addToCart(product.id) }}>PRIDĖTI Į KREPŠELĮ</button>
            <p className='product-display-right-category'>
               <span>Kategorija: </span>Graviravimas, mediena, sventei
            </p>
            <p className='product-display-right-category'>
               <span>Tagai: </span>Modernus, Naujausias, Dovana
            </p>
         </div>
      </div>
   )
}

export default ProductDisplay
