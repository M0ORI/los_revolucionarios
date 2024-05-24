import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import styles from './InvNavbar.module.css';
import home1 from "../../../public/images/Icons/hogar.png"
import home2 from "../../../public/images/Icons/hogar2.png"
import cubiertos from "../../../public/images/Icons/cubiertos.png"
import cubiertos2 from "../../../public/images/Icons/cubiertos2.png"

const InvNavrbar = () => {
  const location = useLocation(); // Obtén la ubicación actual

  const home = location.pathname === '/' ? 'Inicio' : ''
  const menu = location.pathname === '/menu' ? 'Menú' : ''

  return (
    <nav className={styles.contenedor}>
      <Link to="/" className={styles.link}>
        <img
         src={location.pathname === '/' ? home2 : home1}  alt="" 
         />
         <p>{home} </p>
      </Link>
      <Link to="/menu" className={styles.link}>
        <img
         src={location.pathname === '/menu' ? cubiertos2 : cubiertos}  alt="" 
         />
         <p>{menu}</p>
      </Link>
    </nav>
  );
};

export default InvNavrbar;
