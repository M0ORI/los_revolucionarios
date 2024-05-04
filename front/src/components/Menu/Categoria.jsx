import React from 'react'
import styles from './Categoria.module.css'
import Platillo from './Platillo'

const Categoria = ({nombre}) => {
  return (
    <section className={styles.contenedor}>
        <h1 className={styles.tituloCategoria}> {nombre} </h1>
        <Platillo nombre={'Pollo adobado'} descripcion={'Acompañado con papas, aguacate, ensaladas y frijoles'} img={'../../public/images/Pollo_adobado.jpeg'}/>
        <Platillo nombre={'Pollo adobado'} descripcion={'Acompañado con papas, aguacate, ensaladas y frijoles'} img={'../../public/images/Pollo_adobado.jpeg'}/>
    </section>
  )
}

export default Categoria
