import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import styles from './InvNavbar.module.css';

const InvNavrbar = () => {
  const location = useLocation(); // Obtén la ubicación actual

  return (
    <nav className={styles.contenedor}>
      <Link to="/" className={styles.link}>
        <img
         src={location.pathname === '/' ? "../../public/images/icons/hogar2.png" : "../../public/images/icons/hogar.png"}  alt="" 
         />
      </Link>
      <Link to="/menu" className={styles.link}>
        <img
         src={location.pathname === '/menu' ? "../../public/images/icons/cubiertos2.png" : "../../public/images/icons/cubiertos.png"}  alt="" 
         />
      </Link>
    </nav>
  );
};

export default InvNavrbar;
