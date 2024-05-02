import React from 'react'
import logo from '../../../public/images/logo.png'

const Navbar = () => {
  return (
    <header className='navbar'>
      <img src={logo} alt='Los Revolucionarios' />
      <h1><a className='nombre' href="/">Los Revolucionarios</a></h1>
      <nav>
          <ul>
              <li><a href="/menu">Menu</a></li>
          </ul>
      </nav>
    </header>
  )
}

export default Navbar