import React from 'react'
import './Header.css'
import Dropdown from './Dropdown/Dropdown'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header-main'>
        <div className='header-bar'>
            {/* <div className='dropdown-menu'><img className='menu-image' src={menu} alt = "menu"/></div> */}
            <Dropdown/>
            <Link to={'/'}>
              <div className='home-button'>Home</div>
            </Link>
            <Link to={'/about'}>
              <div className='about-button'>About</div>
            </Link>
            
        </div>
    </div>
  )
}

export default Header