import React from 'react'
import Navbar from '../Navbar/Navbar'
import Categoria from './Categoria'
import InvNavrbar from '../InvNavbar/InvNavrbar'
import Contacto from '../Contacto/Contacto'

import menuData from '../../data/menu.json'

import './Menu.css'

const Menu = () => {
  return (
    <>
      <Navbar/>
      <div className='divisor'></div>
      <main>
        {
          menuData.map((categoria, id) => {
            return (
              <Categoria nombre={categoria.categoria} platillos={categoria.platillos} key={id} />
            )
          })
        }
      <div className='contenedorBoton'>
        <p>Descarga nuestro menu completo</p>
        <a href="/public/MENU.pdf" download>
          <button>Menu Completo</button>
        </a>
      </div>
      <div className='divisor' ></div>
      <Contacto/>
      </main>
      <InvNavrbar/>
    </>
  )
}

export default Menu
