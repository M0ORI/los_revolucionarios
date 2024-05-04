import React from 'react'
import styles from './Categoria.module.css'
import Platillo from './Platillo'

const Categoria = ({nombre, platillos}) => {
  return (
    <section className={styles.contenedor}>
        <h1 className={styles.tituloCategoria}> {nombre} </h1>
        {
          platillos.map((platillo, id) => {
            return (
              <Platillo nombre={platillo.nombre} img={platillo.img} descripcion={platillo.descripcion} key={id} />
            )
          })
        }
    </section>
  )
}

export default Categoria
