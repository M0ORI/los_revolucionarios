import React from 'react'
import styles from './Platillo.module.css'

const Platillo = ({img, nombre, descripcion}) => {
  return (
    <div className={styles.contenedor}>
      <div className={styles.imgContenedor}>
        <img className={styles.imagenPlatillo} loading='lazy' src={img} alt="" />
      </div>
      <div className={styles.informacionContenedor}>
        <h2> {nombre} </h2>
        <p> {descripcion} </p>
      </div>
    </div>
  )
}

export default Platillo
