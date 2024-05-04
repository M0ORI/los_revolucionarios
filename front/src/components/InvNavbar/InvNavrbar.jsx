import React from 'react'
import styles from './InvNavbar.module.css'
const InvNavrbar = () => {
  return (
    <div className={styles.contenedor}>
      <a className={styles.home} href=""><img  src="../../public/images/icons/hogar.png" alt="" /></a>
      <a className={styles.menu} href=""><img  src="../../public/images/icons/cubiertos.png" alt="" /></a>
    </div>
  )
}

export default InvNavrbar
