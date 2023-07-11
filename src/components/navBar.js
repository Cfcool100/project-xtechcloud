import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const HandleClick = () => {
    setIsOpen(!isOpen);
  }

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
        <FontAwesomeIcon
          icon={isOpen ? faClose : faBars}
          size='lg'
          style={{ color: '#f1f4f8' }}
          onClick={HandleClick}
        />
      </div>
    </div>
  )
}

export default NavBar;