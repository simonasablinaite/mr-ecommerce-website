import React, { useEffect, useState } from 'react';
import './popular.css';

import Item from '../Item/Item';

const Popular = () => {

   const [popularProducts, setpopularProducts] = useState([]);

   useEffect(() => {
      fetch('http://localhost:7000/popularingifts')
         .then((res) => res.json())
         .then((data) => { setpopularProducts(data) });
   }, [])

   return (
      <div className='popular'>
         <h1>POPULIARIAUSIOS DOVANOS</h1>
         <hr />
         <div className="popular-item">
            {popularProducts.map((item, i) => {
               return <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
               />
            })}
         </div>
      </div>
   )
}

export default Popular
