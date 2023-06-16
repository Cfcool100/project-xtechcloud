import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'

const NavBar = () => {
  return (
    <div className='Navbar'>
      <div className='logo'>  
      <Link to={'/'}>
        <img src={logo} alt="" />
      </Link>
      </div>
      <div className='nav'>
      <Link to={'/'}>Accueil</Link>
      <Link to={'/services'}>Services</Link>
      <Link to={'/blog'}>Blog</Link>
      <Link to={'/contact'}>Contact</Link>
      </div>
    </div>
  )
}

export default NavBar;