import React from 'react'
import styles from './InvNavbar.module.css'
const InvNavrbar = () => {
  return (
    <nav className={styles.contenedor}>
      <a href="/">
          <img src="../../public/images/icons/hogar.png" alt="" />
      </a>
      <a href="/">
          <img src="../../public/images/icons/cubiertos.png" alt="" />
      </a>
    </nav>
  )
}

export default InvNavrbar
