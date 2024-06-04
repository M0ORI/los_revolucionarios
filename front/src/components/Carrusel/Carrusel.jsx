/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";
import { useEffect } from "react";
import styles from "./Carrusel.module.css";
import coctel from "../../../public/images/Carrusel/coctel.jpeg";
import menu from "../../../public/images/Carrusel/menu.jpeg";
import camaron from "../../../public/images/Carrusel/camaron.jpg";

const Carrusel = ({ images }) => {

  // UseEffect para el carrusel
  useEffect(() => {
    // Llamada al carrusel
    const carrusel = document.querySelector(`.${styles.carrusel}`);
    let contador = 1;

    // Intervalo para el carrusel
    const intervalId = setInterval(() => {
      if (carrusel) {
        // Transición del carrusel
        carrusel.style.transform = `translate(${contador * -100}%)`;
        carrusel.style.transition = 'transform 1s';
      }
      contador++;
      // Si llega a la última imagen, regresa a la primera
      if (contador === 3) {
        contador = 0;
      }
    }, 3000);
    // Limpieza del intervalo
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.carrusel}>
        <img className={styles.img} src={coctel} alt="imagen1" />
        <img className={styles.img} src={menu} alt="imagen2" />
        <img className={styles.img} src={camaron} alt="imagen3" />
        {/*  {images.map((image, index) => (
          <img
            key={index} 
            src={image.imagen}
            alt={image.nombre}
            className={styles.img}
          /> 
        ))} */}
      </div>
    </div>

  );
};

export default Carrusel;
