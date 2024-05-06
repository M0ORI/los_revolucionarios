import React from 'react';
import Platillos from '../../../src/components/Platillos/Platillos'
import logo from '../../../public/images/logo.png';
import phone from '../../../public/images/phone.svg';
import whatsapp from '../../../public/images/whatsapp-logo.svg';
import biste from '../../../public/images/biste.jpg';
import styles from './Body.module.css';

const Body = () => {
    return (
        <div className={styles.body}>
            <h1 className={styles.nombre}>Los Revolucionarios</h1>
            <img src={logo} alt='logo' className={styles.logo} />
            <p className={styles.description}>Ven y disfruta de la mejor comida con un ambiente familiar, 25 años de experiencia nos respaldan ¡Te esperamos!</p>
            <div className={styles.buttons}>
                <div className={styles.button}>
                    <p>Llamanos!</p>
                    <img src={phone} alt="phone" />
                </div>
                <div className={styles.button}>
                    <p>Whatsapp!</p>
                    <img className={styles['whatsapp-button']} src={whatsapp} alt="logow" />
                </div>
            </div>
            <h1 className={styles.subtitle} >A LA PARRILLA</h1>
            <Platillos name='Biste rico' img={biste} />
            <Platillos name='Papas alafranchute' img={biste} />
            <Platillos name='Sillas acarameladas' img={biste} />

        </div>
    );
};

export default Body;
