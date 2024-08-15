import React from 'react'
import './navbar.css'
import nav_logo from '../../assets/logo.png'
import nav_profile from '../../assets/profile-icon.png'


const Navbar = () => {
   return (
      <div className='navbar'>
         <img className='nav-logo' src={nav_logo} alt="navigation logo" />
         <img className='nav-profile' src={nav_profile} alt="navigation profile" />

      </div>
   )
}

export default Navbar
