import React from 'react';
import Platillos from '../../../src/components/Platillos/Platillos'
import logo from '../../../public/images/logo.png';
import phone from '../../../public/images/phone.svg';
import whatsapp from '../../../public/images/whatsapp-logo.svg';
import biste from '../../../public/images/biste.jpg';
import filete from '../../../public/images/Filete.jpeg';
import revolucionaria from '../../../public/images/revolucionaria.jpg';
import refrescos from '../../../public/images/refresco.jpeg';
import coctel from '../../../public/images/coctel.jpg';
import tostada from '../../../public/images/tostada.jpg';
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
            <hr style={{ width: '90%', margin: 'auto', background: '#361916', height: '2px', border: 'none', margin: '2rem' }} />
            <h1 className={styles.subtitle}>A la parrilla...</h1>
            <Platillos name='Costilla de Res' img={biste} />
            <Platillos name='Pollo Adobado' img={filete} />
            <h1 className={styles.subtitle}>Mariscos </h1>
            <Platillos name='Tostada de camaron' img={tostada} />
            <Platillos name='Coctel de camaron' img={coctel} />
            <h1 className={styles.subtitle}>Bebidas </h1>
            <Platillos name='Revolucionaria' img={revolucionaria} />
            <Platillos name='Variedad de refrescos' img={refrescos} />
        </div>
    );
};

export default Body;
