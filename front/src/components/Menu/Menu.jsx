import React from 'react'
import Navbar from '../Navbar/Navbar'
import Categoria from './Categoria'
import InvNavrbar from '../InvNavbar/InvNavrbar'
import Contacto from '../Contacto/Contacto'
import styles from './Menu.module.css'
import menuData from '../../data/menu.json'


const Menu = () => {
  return (
    <>
      <Navbar/>
      <div className={styles.divisor}></div>
      <main>
        {
          menuData.map((categoria, id) => {
            return (
              <Categoria nombre={categoria.categoria} platillos={categoria.platillos} key={id} />
            )
          })
        }
      <div className={styles.divisor}></div>
      <Contacto/>
      </main>
      <InvNavrbar/>
    </>
    
  )
}

export default Menu
