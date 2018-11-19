import React from 'react'
import confianzaLogo from '../../assets/images/homepage-logo.png'
import styles from './Logo.module.css'
import Aux from '../../hoc/Aux/Aux'

const logo = (props) => {
    return (
        <Aux>
            <img className = {styles[props.style]} src={confianzaLogo} alt="C" onClick = {props.back}/>
        </Aux>
    );
}

export default logo;