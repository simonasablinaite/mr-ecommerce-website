import React, { useState } from 'react';
import './navbar.css';

import logo from '../Assets/logo.png';
import cart_icon from '../Assets/shopping_cart.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

   const [menu, setMenu] = useState("shop");

   return (
      <div className='navbar'>
         <div className="nav-logo">
            <img src={logo} alt="logo" />
         </div>

         <ul className="nav-menu">
            <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: "none" }} to='/'> E-parduotuvė</Link>{menu === "shop" ? <hr /> : <></>}  </li>
            <li onClick={() => { setMenu("spauda") }}><Link style={{ textDecoration: "none" }} to='/spauda'> Spauda</Link>  {menu === "mens" ? <hr /> : <></>}</li>
            <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: "none" }} to='/graviravimas'>Graviravimas</Link> {menu === "womens" ? <hr /> : <></>}</li>
            <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: "none" }} to='/dovanų idėjos'>Dovanų idėjos</Link> {menu === "kids" ? <hr /> : <></>}</li>
         </ul>

         <div className="nav-login-cart">
            <Link to='/login'><button>Prisijungti</button></Link>
            <Link to='/cart'><img style={{ width: "35px" }} src={cart_icon} alt="cart icon" /></Link>
            <div className="nav-cart-count">0</div>
         </div>
      </div>
   )
}

export default Navbar
