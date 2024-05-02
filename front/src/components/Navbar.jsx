import React from 'react'
import logo from '../images/logo.png'

const Navbar = () => {
  return (
    <header className='navbar'>
      <img src={logo} alt='Los Revolucionarios' />
      <h1><a className='nombre' href="/">Los Revolucionarios</a></h1>
      <nav>
          <ul>
              <li><a href="/menu">Menu</a></li>
              {/**[9:04, 2/5/2024] Julian : #f0dcba
                [9:05, 2/5/2024] Julian : #361916
                [9:05, 2/5/2024] Julian : #7a0000 */}

          </ul>
      </nav>
    </header>
  )
}

export default Navbar