import React from 'react'
import Logo from '../Logo/Logo'
import SearchBar from '../SearchBar/SearchBar'
import styles from './Navbar.module.css'

const navbar = (props) => (
    <header className={styles['navbar']}>
        <Logo style='small' />

        <SearchBar
            nameSearchBarValue = {props.nameSearchBarValue}
            nameSearchBarChange = {props.nameSearchBarChange}
            searchBarClicked = {props.searchBarClicked} 
            />

        <span className={styles['login-and-signup']}>
            <button className={styles['login']}>Log In</button>
            <button className={styles['signup']}>Sign Up</button>
        </span>

    </header>
);

export default navbar