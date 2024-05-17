import React from 'react'
import Navbar from '../Navbar/Navbar'
import Categoria from './Categoria'
import InvNavrbar from '../InvNavbar/InvNavrbar'
import Contacto from '../Contacto/Contacto'

import menuData from '../../data/menu.json' /*Importamos el archivo JSON que contiene la infomacion de las categorias con sus respectivos paltillos*/

import './Menu.css' /*Importamos el estilo  */

const Menu = () => {
  return (
    <>
      <Navbar/>
      <div className='divisor'></div>
      <main>
        {
          menuData.map((categoria, id) => { /*Usamos la funcion map para renderizar cada categoria con sus respctivos platillos en componentes, haciendo uso de la informacion contenida */
            return (
              <Categoria nombre={categoria.categoria} platillos={categoria.platillos} key={id} />
            )
          })
        }
      <div className='contenedorBoton'> {/*Div usado para dividir la pagina */}
        <p>Descarga nuestro menu completo</p>
        <a href="/public/MENU.pdf" download>
          <button>Menu Completo</button> {/*Boton para descargar el menu*/}
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
