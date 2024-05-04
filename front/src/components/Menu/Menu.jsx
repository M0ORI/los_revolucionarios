import React from 'react'
import Navbar from '../Navbar/Navbar'
import Categoria from './Categoria'
import InvNavrbar from '../InvNavbar/InvNavrbar'

import menuData from '../../data/menu.json'

const Menu = () => {
  return (
    <>
    <body>
      <Navbar/>
      <main>
        {
          menuData.map((categoria, id) => {
            return (
              <Categoria nombre={categoria.categoria} platillos={categoria.platillos} key={id} />
            )
          })
        }
      </main>
      <InvNavrbar/>
    </body>
    </>
    
  )
}

export default Menu
