import './NavBar.css'
import React from 'react'
import Logo from '../../icons/logo_image.svg'

function NavBar() {
  return (
    <div className="NAVBAR_CONTAINER">
      <div className="navbar_left">
        <img src={Logo} alt="logo" className='logo_image' />
        <h2 className="logo_text">Rafael Flores</h2> 
      </div>
      <div className="navbar_right">
        <a href="#home"><h2>Home</h2></a>
        <a href="#about"><h2>About me</h2></a>
        <a href="#contact"><h2>Contact</h2></a>

      </div>
    </div>
  )
}

export default NavBar
