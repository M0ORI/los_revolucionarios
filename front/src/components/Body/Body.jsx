/* eslint-disable react/prop-types */

import { useState, useEffect } from 'react';
import Platillos from '../../../src/components/Platillos/Platillos'
import logo from '../../../public/images/logo.png';
import phone from '../../../public/images/Icons/phone-call.png';
import whats from '../../../public/images/Icons/whatsapp.png';
import styles from './Body.module.css';
import filete from '../../../public/images/Filete.jpeg'
import coctel from '../../../public/images/coctel.jpg'
import chescos from '../../../public/images/refresco.jpeg'

const Body = ( {datos} ) => {

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
            {/* {datos.slice(0, 2).map((item, index) => (
                <Platillos key={index} name={item.platillo.nombre} img={item.platillo.imagen} />
            ))} */}
            <Platillos name={'Pollo adobado'} img={filete} />
            
            <h1 className={styles.subtitle}>Mariscos</h1>
            {/* {datos.slice(2, 4).map((item, index) => (
                <Platillos key={index} name={item.platillo.nombre} img={item.platillo.imagen} />
            ))} */}
            <Platillos name={'Coctel de Camarón'} img={coctel} />
            
            <h1 className={styles.subtitle}>Bebidas</h1>
            {/* {datos.slice(4, 6).map((item, index) => (
                <Platillos key={index} name={item.platillo.nombre} img={item.platillo.imagen} />
            ))} */}
            {/* {datos.map((platillo) => (
                <Platillos key={platillo.id} name={platillo.platillo.nombre} img={platillo.platillo.imagen} />
            ))} */}
            <Platillos name={'Variedad de Refrescos'} img={chescos} />

        </div>
    );
};

export default Body;
