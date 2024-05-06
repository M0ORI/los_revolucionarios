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
                    <p>
                        <a href="">
                            Llamanos!
                        </a>
                    </p>
                    <img src={phone} alt="phone" />
                </div>
                <div className={styles.button}>
                    <p>
                        <a href="">
                            Whatsapp!
                        </a>
                    </p>
                    <img className={styles['whatsapp-button']} src={whatsapp} alt="logow" />
                </div>
            </div>
            <hr style={{ width: '90%', margin: 'auto', background: '#361916', height: '2px', border: 'none', margin: '2rem'}} />
            <h1 className={styles.subtitle}>A la parrilla...</h1> 
            <Platillos name='Filete Mignon con Puré de Papas' img={biste} />
            <Platillos name='Salmón a la Parrilla' img={biste} />
            <Platillos name='Risotto de Champiñones' img={biste} />

        </div>
    );
};

export default Body;
