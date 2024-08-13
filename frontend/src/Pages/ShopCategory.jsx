import React, { useContext } from 'react';
import './CSS/shopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown-icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {

   const { all_products } = useContext(ShopContext);

   return (
      <div className='shop-category'>
         <img className='sortcategory-banner' src={props.banner} alt="category banner" />
         <div className="shopcategory-indexSort">
            <p>
               <span>Rodyti 1-10</span> iš 14 produktų
            </p>
            <div className="shopcategory-sort">
               Rūšiuoti pagal <img src={dropdown_icon} alt="rodykle žemyn" />
            </div>
         </div>

         <div className="shopcategory-products">

            {all_products.map((item, i) => {
               if (props.category === item.category) {
                  return <Item
                     key={i}
                     id={item.id}
                     name={item.name}
                     image={item.image}
                     new_price={item.new_price}
                     old_price={item.old_price}
                  />
               } else {
                  return null;
               }
            })}
         </div>
         <div className="shopcategory-loadmore">
            Pateikti daugiau
         </div>
      </div>
   )
}

export default ShopCategory
