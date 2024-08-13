import React, { useContext } from 'react';
import './cartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remoce_icon from '../Assets/remove-icon.png';


const CartItems = () => {

   const { all_products, cartItems, removeFromCart } = useContext(ShopContext);

   return (
      <div className='cartitems'>
         <div className="cartitems-format-main">
            <p>Produktai</p>
            <p>Pavadinimas</p>
            <p>Kaina</p>
            <p>Kiekis</p>
            <p>Viso</p>
            <p>Pašalinti</p>
         </div>
         <hr />
         {all_products.map((e) => {
            if (cartItems[e.id] > 0) {
               return <div>
                  <div className="cartitems-format cartitems-format-main">
                     <img src={e.image} alt="" className='carticon-product-icon' />
                     <p>{e.name}</p>
                     <p>{e.new_price}€</p>
                     <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                     <p>{e.new_price * cartItems[e.id]}€</p>
                     <img onClick={() => { removeFromCart(e.id) }} className='carticon-remove-icon' src={remoce_icon} alt="" />
                  </div>
                  <hr />

               </div>
            }
            return null;
         })}
         <div className="cartitems-down">
            <div className="cartitems-total">
               <h1>Viso krepšelyje</h1>
               <div>
                  <div className="cartitems-total-item">
                     <p>Tarpinė suma</p>
                     <p>{0}€</p>
                  </div>
                  <hr />
                  <div className="cartitems-total-item">
                     <p>Nemokamas siuntimas</p>
                     <p>Nemokamas</p>
                  </div>
                  <hr />
                  <div className="cartitems-total-item">
                     <h3>Iš viso</h3>
                     <h3>{0}€</h3>
                  </div>
               </div>
               <button>PEREITI PRIE APMOKĖJIMO</button>
            </div>
            <div className="cartitems-promocode">
               <p>Jei turite nuolaidos kodą, spauskite ČIA</p>
               <div className="cartitems-promobox">
                  <input type="text" placeholder='Nuolaidos kodas' />
                  <button>Pateikti</button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CartItems
