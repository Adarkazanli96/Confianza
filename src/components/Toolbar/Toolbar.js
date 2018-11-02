import React from 'react'
import Logo from '../Logo/Logo'
import SearchBar from '../SearchBar/SearchBar'
import styles from './Toolbar.module.css'

const toolbar = (props) => (
    <header className={styles['toolbar']}>
        <Logo style = 'small'/>
        <span className={styles['confianza-text']}>Confianza</span>
        <SearchBar />
        <span className={styles['login-and-signup']}>
            <button className={styles['login']}>Log In</button>   
            <button className={styles['signup']}>Sign Up</button>
        </span>

    </header>
);

export default toolbar