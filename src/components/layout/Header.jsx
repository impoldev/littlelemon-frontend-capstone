import Logo from '../../assets/Logo.svg'
import Hamburger from '../../assets/Hamburger.svg'
import { useState } from 'react'
import '../../stylesheets//layout/Header.css'
import { Link } from 'react-router'

export function Header() {
  const [submenu, setSubmenu] = useState(false)

  function handleMobileMenu() {
    setSubmenu(prev => !prev)
  }

  return(
    <header>
      <Link to={'/'}><img src={Logo} alt='Little Lemon' width={200} /></Link>
      <nav className='desktop'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/menu'>Menu</Link></li>
          <li><Link to='/booking'>Reservations</Link></li>
          <li><Link to='/order'>Order Online</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
      </nav>
      <div className='mobile' onClick={handleMobileMenu}>
        <img src={Hamburger} alt="hamburger menu" />
        {
          submenu &&
          <div className='submenu'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/menu'>Menu</Link></li>
            <li><Link to='/booking'>Reservations</Link></li>
            <li><Link to='/order'>Order Online</Link></li>
            <li><Link to='/login'>Login</Link></li>
          </div>
        }
      </div>
    </header>
  )
}