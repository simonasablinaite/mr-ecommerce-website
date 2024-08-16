import React, { createContext, useEffect, useState } from 'react';

// Cia sukuriamas kontekstas
export const ShopContext = createContext(null);

const getDefaultCart = () => {
   let cart = {};

   for (let i = 0; i < 300 + 1; i++) {
      cart[i] = 0;
   }
   return cart;
}

// Cia sukuriamas konteksto provideris (to konteksto aprupintojas):
const ShopContextProvider = (props) => {

   const [all_products, setAll_Products] = useState([]);
   const [cartItems, setCartItems] = useState(getDefaultCart());

   useEffect(() => {
      fetch('http://localhost:7000/allproducts')
         .then((res) => res.json())
         .then((data) => setAll_Products(data));

      if (localStorage.getItem('auth-token')) {
         fetch('http://localhost:7000/getcart', {
            method: 'POST',
            headers: {
               Accept: 'application/form-data',
               'auth-token': `${localStorage.getItem('auth-token')}`,
               'Content-Type': 'application/json',
            },
            body: "",
         }).then((res) => res.json())
            .then((data) => { setCartItems(data) });
      }
   }, [])

   const addToCart = (itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
      if (localStorage.getItem('auth-token')) {
         fetch('http://localhost:7000/addtocart', {
            method: "POST",
            headers: {
               Accept: 'application/json',
               'auth-token': `${localStorage.getItem('auth-token')}`,
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "itemId": itemId })
         })
            .then((res) => res.json())
            .then((data) => console.log(data));
      }
   }

   const removeFromCart = (itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))

      if (localStorage.getItem('auth-token')) {
         fetch('http://localhost:7000/removefromcart', {
            method: "POST",
            headers: {
               Accept: 'application/json',
               'auth-token': `${localStorage.getItem('auth-token')}`,
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "itemId": itemId })
         })
            .then((res) => res.json())
            .then((data) => console.log(data));
      }
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