import React from 'react'
import confianzaLogo from '../../assets/images/confianza-logo-name.png'
import styles from './Logo.module.css'
import Aux from '../../hoc/Aux/Aux'

const logo = (props) => {
    return (
        <Aux>
            <img className = {styles['top-of-page']} src={confianzaLogo} alt="C" />
        </Aux>
    );
}

export default logo;