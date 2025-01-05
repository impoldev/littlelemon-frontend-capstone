import Logo from '../assets/Logo.svg'
import Hamburger from '../assets/Hamburger.svg'
import { useState } from 'react'
import '../stylesheets/Header.css'

export function Header() {
  const [submenu, setSubmenu] = useState(false)

  function handleMobileMenu() {
    setSubmenu(prev => !prev)
  }

  return(
    <header>
      <img src={Logo} alt='Little Lemon' width={200} />
      <nav className='desktop'>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservations">Reservations</a></li>
          <li><a href="#order-online">Order Online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </nav>
      <div className='mobile' onClick={handleMobileMenu}>
        <img src={Hamburger} alt="hamburger menu" />
        {
          submenu &&
          <div className='submenu'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order-online">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </div>
        }
      </div>
    </header>
  )
}