import React from 'react'
import confianzaLogo from '../../assets/images/confianza-logo-name.png'
import styles from './Logo.module.css'

const logo = (props) => {
    return (
        <div>
            <img className = {styles['top-of-page']} src={confianzaLogo} alt="C" />
        </div>
    );
}

export default logo;