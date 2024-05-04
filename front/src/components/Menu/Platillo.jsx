import React from 'react'
import styles from './Platillo.module.css'

const Platillo = ({img, nombre, descripcion}) => {
  return (
    <div className={styles.contenedor}>
      <div className={styles.imgContenedor}>
        <img src={img} alt="" />
      </div>
      <div className={styles.informacionContenedor}>
        <h1> {nombre} </h1>
        <p> {descripcion} </p>
      </div>
    </div>
  )
}

export default Platillo
