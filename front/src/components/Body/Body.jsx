import React, { useState, useEffect } from 'react';
import Platillos from '../../../src/components/Platillos/Platillos'
import logo from '../../../public/images/logo.png';
import phone from '../../../public/images/Icons/phone-call.png';
import whats from '../../../public/images/whatsapp-logo.svg';
import biste from '../../../public/images/biste.jpg';
import filete from '../../../public/images/Filete.jpeg';
import revolucionaria from '../../../public/images/revolucionaria.jpg';
import refrescos from '../../../public/images/refresco.jpeg';
import coctel from '../../../public/images/coctel.jpg';
import tostada from '../../../public/images/tostada.jpg';
import styles from './Body.module.css';


const Body = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const titulo1 = isMobile ? 'Llamanos' : 'Menu';
    const titulo2 = isMobile ? 'WhatsApp' : 'Visitanos';

    const menuLink = isMobile ? "tel:4432324326" : "/menu";
    const contactLink = isMobile ? "https://wa.me/4432324326" : "https://maps.app.goo.gl/xVn9zztRbxQoG5gz8";

    return (
        <div className={styles.body}>
            <h1 className={styles.nombre}>Los Revolucionarios</h1>
            <img src={logo} alt='logo' className={styles.logo} />
            <p className={styles.description}>Ven y disfruta de la mejor comida con un ambiente familiar, 25 años de experiencia nos respaldan ¡Te esperamos!</p>
            <div className={styles.buttons}>
                <div className={styles.button}>
                    <p>
                        <a className={styles.reference} href={menuLink} target={isMobile ? "" : "_self"} rel={isMobile ? "" : "noopener noreferrer"}>
                            {titulo1}
                            <img src={phone} alt="phone" />
                        </a>
                    </p>
                </div>
                <div className={styles.button}>
                    <p>
                        <a  className={styles.reference} href={contactLink} target='_blank'>
                            {titulo2}
                            <img className={styles['whatsapp-button']} src={whats} alt="logow" />
                        </a>
                    </p>
                </div>
            </div>
            <h1 className={styles.subtitle}>A la parrilla</h1>
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
