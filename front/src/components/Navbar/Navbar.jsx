/* eslint-disable no-unused-vars */
import React from 'react'
import logo from '../../../public/images/logo.png'
import styles from './Navbar.module.css'
import { Link, useLocation } from 'react-router-dom'; 

const Navbar = () => {
  
  const ruta = location.pathname === '/' ? 'Carta Completa' : 'Inicio';

  return (
    <header className={styles.navbar}>
      <img src={logo} alt='Los Revolucionarios' />
      <h1><a className={styles.nombre} href="/">Los Revolucionarios</a></h1>
      <nav>
        <ul>
          <li>
            <Link to={location.pathname === '/' ? '/menu' : '/'}>
              <p>{ruta}</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar