import React, { createContext, useState } from 'react';
import all_products from '../Components/Assets/all_product';

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
   const contextValue = { all_products, cartItems, addToCart, removeFromCart };

   return (
      <ShopContext.Provider value={contextValue}>
         {props.children}

      </ShopContext.Provider>
   )
}

export default ShopContextProvider;