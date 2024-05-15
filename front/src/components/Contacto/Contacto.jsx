import React from 'react'
import styles from './Contacto.module.css'
import icon1 from '../../../public/images/Icons/phone-call.png'
import icon2 from '../../../public/images/Icons/direccion.png'
const Contacto = () => {
  return (
    <div className={styles.main}>
      <ul className={styles.contenedor}>
        <li className={styles.item}>
            <a href="">
                <h2 className={styles.texto}>Llamanos</h2>
                <img src={icon1} alt="" />
            </a>
        </li>
        <li className={styles.item}>
            <a href="">
                <h2 className={styles.texto}>Visitanos</h2>
                <img src={icon2} alt="" />
            </a>
        </li>
      </ul>
    </div>
  )
}

export default Contacto
