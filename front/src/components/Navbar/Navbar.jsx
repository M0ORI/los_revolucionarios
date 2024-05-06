/* eslint-disable no-unused-vars */
import React from 'react'
import logo from '../../../public/images/logo.png'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <img src={logo} alt='Los Revolucionarios' />
      <h1><a className={styles.nombre} href="/">Los Revolucionarios</a></h1>
      <nav>
        <ul>
          <li><a href="/menu">Menu</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar