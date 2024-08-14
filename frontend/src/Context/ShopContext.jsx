import React, { createContext, useState } from 'react';
import all_products from '../Components/Assets/all_product';
import CartItems from '../Components/CartItems/CartItems';

// Cia sukuriamas kontekstas
export const ShopContext = createContext(null);

const getDefaultCart = () => {
   let cart = {};

   for (let i = 0; i < all_products.length + 1; i++) {
      cart[i] = 0;
   }
   return cart;
}

// Cia sukuriamas konteksto provideris (to konteksto aprupintojas):
const ShopContextProvider = (props) => {

   const [cartItems, setCartitems] = useState(getDefaultCart());

   const addToCart = (itemId) => {
      setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
      console.log(cartItems);
   }

   const removeFromCart = (itemId) => {
      setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
   }

   const getTotalCartAmount = () => {
      let totalAmount = 0;

      for (const item in cartItems) {
         if (cartItems[item] > 0) {
            let itemInfo = all_products.find((product) => product.id === Number(item))
            totalAmount += itemInfo.new_price * cartItems[item];
         }

      }
      return totalAmount;
   }

   const getTotalCartItems = () => {
      let totalItem = 0;

      for (const item in cartItems) {
         if (cartItems[item] > 0) {
            totalItem += cartItems[item];
         }
      }
      return totalItem;
   }

   const contextValue = { getTotalCartItems, getTotalCartAmount, all_products, cartItems, addToCart, removeFromCart };

   return (
      <ShopContext.Provider value={contextValue}>
         {props.children}

      </ShopContext.Provider>
   )
}

export default ShopContextProvider;