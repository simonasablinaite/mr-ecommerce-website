import React, { useEffect, useState } from 'react'
import './listProducts.css'
import remove_icon from '../../assets/remove-icon.png'

const ListProducts = () => {

   const [allproducts, setAllproducts] = useState([]);

   const fetchInfo = async () => {
      await fetch('http://localhost:7000/allproducts')
         .then((res) => res.json())
         .then((data) => { setAllproducts(data) });
   }

   useEffect(() => {
      fetchInfo();
   }, [])

   const remove_product = async (id) => {
      await fetch('http://localhost:7000/removeproduct', {
         method: 'POST',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({ id: id })
      })
      await fetchInfo();
   }

   return (
      <div className='list-products'>
         <h1>Visų produktų sąrašas</h1>

         <div className="list-products-format-main">
            <p>Produktas</p>
            <p>Pavadinimas</p>
            <p>Sena kaina</p>
            <p>Nauja kaina</p>
            <p>Kategorija</p>
            <p>Pašalinti</p>
         </div>

         <div className="list-products-all-products">
            <hr />
            {allproducts.map((product, i) => {
               return <>
                  <div key={i} className="list-products-format-main list-products-format">
                     <img className='list-products-product-icon' src={product.image} alt="product image" />

                     <p>{product.name}</p>
                     <p>{product.old_price} €</p>
                     <p>{product.new_price} €</p>
                     <p>{product.category}</p>

                     <img onClick={() => { remove_product(product.id) }} className='list-products-remove-icon' src={remove_icon} alt="delete product ikon" />
                  </div>
                  <hr />
               </>
            })}
         </div>
      </div>
   )
}

export default ListProducts
