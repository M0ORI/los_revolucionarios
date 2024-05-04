import React from 'react'
import styles from './Contacto.module.css'
const Contacto = () => {
  return (
    <div className={styles.main}>
      <ul className={styles.contenedor}>
        <li className={styles.item}>
            <a href="">
                <h2 className={styles.texto}>Llamanos</h2>
                <img src="../../public/images/icons/phone-call.png" alt="" />
            </a>
        </li>
        <li className={styles.item}>
            <a href="">
                <h2 className={styles.texto}>WhatsApp</h2>
                <img src="../../public/images/icons/whatsapp.png" alt="" />
            </a>
        </li>
      </ul>
    </div>
  )
}

export default Contacto
