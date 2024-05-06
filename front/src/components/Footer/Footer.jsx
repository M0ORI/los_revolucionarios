/* eslint-disable no-unused-vars */
import React from 'react'

import logo from '../../../public/images/logo.png'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div>
        <footer className={styles.footer}>
            <div className={styles.footer__map}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5311.200449036968!2d-101.19864545563374!3d19.73024866000504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d0e50f1a29e01%3A0x4bbe2b4ae19dee80!2sLos%20Revolucionarios!5e0!3m2!1ses-419!2smx!4v1714959116887!5m2!1ses-419!2smx"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Embedded Google Map"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className={styles.footer__info}>
                <img src={logo} alt='Los Revolucionarios' />
                <h1>Te estamos esperando!</h1>
                <h2>Av. Torreon Nuevo 519, Vicente Riva Palacio, 58116 Morelia, Mich.</h2>
                <div className={styles.footer__info__contact}>
                    <a href="https://www.facebook.com/profile.php?id=100063681034991&locale=es_LA" target="_blank" rel="noopener noreferrer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="50"
                            height="50"
                            viewBox="0 0 50 50"
                        >
                            <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                        </svg>
                    </a>
                    <h3 className='footer__info__contact__number'>
                        <a href="tel:4431234567">4431234567</a>
                    </h3>
                </div>
                
            </div>
        </footer>
    </div>
  )
}

export default Footer
