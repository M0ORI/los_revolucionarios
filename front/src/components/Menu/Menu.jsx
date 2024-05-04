import React from 'react'
import Navbar from '../Navbar/Navbar'
import Platillo from './Platillo'
import Categoria from './Categoria'
import InvNavrbar from '../InvNavbar/InvNavrbar'

const Menu = () => {
  return (
    <>
    <body>
      <Navbar/>
      <main>
        <Categoria nombre={'A la parrilla'}/>
      </main>
    </body>
    <InvNavrbar/>
    </>
    
  )
}

export default Menu
