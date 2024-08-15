import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
import add_product_icon from '../../assets/add-product-icon.png'
import product_list_icon from '../../assets/product-list-icon.png'

const Sidebar = () => {
   return (
      <div className='sidebar'>
         <Link to={'/addproduct'} style={{ textDecoration: "none" }}>
            <div className="sidebar-item">
               <img src={add_product_icon} alt="add product icon" />
               <p>Pridėti produktų</p>
            </div>
         </Link>

         <Link to={'/listproduct'} style={{ textDecoration: "none" }}>
            <div className="sidebar-item">
               <img src={product_list_icon} alt="product list icon" />
               <p>Produktų sąrašas</p>
            </div>
         </Link>

      </div>
   )
}

export default Sidebar
