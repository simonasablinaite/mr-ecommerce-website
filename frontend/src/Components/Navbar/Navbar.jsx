import React, { useContext, useRef, useState } from 'react';
import './navbar.css';

import logo from '../Assets/logo.png';
import cart_icon from '../Assets/shopping_cart.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown_icon from '../Assets/nav-dropdown.png';

const Navbar = () => {

   const [menu, setMenu] = useState("shop");
   const { getTotalCartItems } = useContext(ShopContext);
   const menuRef = useRef();

   const dropdown_toggle = (e) => {
      menuRef.current.classList.toggle('nav-menu-visible')
      e.target.classList.toggle('open');

   }

   return (
      <div className='navbar'>
         <div className="nav-logo">
            <img src={logo} alt="logo" />
         </div>
         <img onClick={dropdown_toggle} src={nav_dropdown_icon} className='nav-dropdown' alt="dropdown icon" />
         <ul ref={menuRef} className="nav-menu">
            <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: "none" }} to='/'> E-parduotuvė</Link>{menu === "shop" ? <hr /> : <></>}  </li>
            <li onClick={() => { setMenu("spauda") }}><Link style={{ textDecoration: "none" }} to='/spauda'> Spauda</Link>  {menu === "spauda" ? <hr /> : <></>}</li>
            <li onClick={() => { setMenu("graviravimas") }}><Link style={{ textDecoration: "none" }} to='/graviravimas'>Graviravimas</Link> {menu === "graviravimas" ? <hr /> : <></>}</li>
            <li onClick={() => { setMenu("dovanu idejos") }}><Link style={{ textDecoration: "none" }} to='/dovanu idejos'>Dovanų idėjos</Link> {menu === "dovanu idejos" ? <hr /> : <></>}</li>
         </ul>

         <div className="nav-login-cart">
            <Link to='/login'><button>Prisijungti</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="cart icon" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
         </div>
      </div>
   )
}

export default Navbar
