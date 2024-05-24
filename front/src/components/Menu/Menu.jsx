import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Categoria from './Categoria'
import InvNavrbar from '../InvNavbar/InvNavrbar'
import Contacto from '../Contacto/Contacto'
import logo from '../../../public/images/logo.png'

import menuData from '../../data/menu.json' /*Importamos el archivo JSON que contiene la infomacion de las categorias con sus respectivos paltillos*/

import './Menu.css' /*Importamos el estilo  */

const Menu = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDownload = () => {
    // URL del documento que deseas descargar
    const url = '/public/MENU.pdf';
    
    // Crear un enlace invisible
    const link = document.createElement('a');
    link.href = url;
    link.download = 'MENU-REVOLUCIONARIO.pdf'; // Nombre con el que se descargará el archivo

    // Agregar el enlace al documento y hacer clic en él
    document.body.appendChild(link);
    link.click();

    // Eliminar el enlace después de hacer clic
    document.body.removeChild(link);
  };

  return (
    <>
      {windowWidth > 1023 ? (
        <Navbar />
      ) : (
        <div className='welcome'>
          <p>Conoce nuestro menú</p>
        </div>
      )}

      <div className='divisor'></div>
      <main>
        <div className='intro'>
        <img src={logo} alt="" />
        <p>Los Revolucionarios</p>
        </div>
        {
          menuData.map((categoria, id) => { /*Usamos la funcion map para renderizar cada categoria con sus respctivos platillos en componentes, haciendo uso de la informacion contenida */
            return (
              <Categoria nombre={categoria.categoria} platillos={categoria.platillos} key={id} />
            )
          })
        }
      <div className='contenedorBoton'> {/*Div usado para dividir la pagina */}
        <p>Descarga nuestro menu completo</p>
          <button onClick={handleDownload}>Menú Completo</button> {/*Boton para descargar el menu*/}
      </div>
      <div className='divisor' ></div>
      <Contacto/>
      </main>
      <InvNavrbar/>
    </>
  )
}

export default Menu
