import React, { createContext } from 'react';
import all_products from '../Components/Assets/all_product';

// Cia sukuriamas kontekstas
export const ShopContext = createContext(null);

// Cia sukuriamas konteksto provideris (to konteksto aprupintojas):
const ShopContextProvider = (props) => {
   const contextValue = { all_products };

   return (
      <ShopContext.Provider value={contextValue}>
         {props.children}

      </ShopContext.Provider>
   )
}

export default ShopContextProvider;