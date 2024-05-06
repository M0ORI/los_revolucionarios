import React from 'react';
import styles from '../Body/Body.module.css';

const Platillos = (props) => {
  const { name, img } = props; // Desestructuración de props

  return (
    <div className={styles.platillo}>
        <h1 className={styles.seccionPlatillo}> {name} </h1>
        <img src={img} alt="platillo" />
    </div>
  );
};

export default Platillos;
