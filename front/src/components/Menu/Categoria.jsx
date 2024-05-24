import React from 'react'
import styles from './Categoria.module.css'
import Platillo from './Platillo' /*Importamos el componente de platillo */

const Categoria = ({nombre, platillos}) => { /*Se reciben los atributos necesarios para crear la categoria */
  return (
    <section className={styles.contenedor}>
        <h1 className={styles.tituloCategoria}> {nombre} </h1>
        <div className={styles.contenedorPlatillos}>
          {
            platillos.map((platillo, id) => { /*Se hace uso de la funcion map para extraer los datos del objeto platillos, y asi hacer de cada uno un componente */
              return (
                <Platillo nombre={platillo.nombre} img={platillo.imagen} descripcion={platillo.descripcion} key={id} />
              )
            })
          }
        </div>
    </section>
  )
}

export default Categoria
