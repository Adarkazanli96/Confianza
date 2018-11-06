import React from 'react'
import searchIcon from '../../assets/images/search-icon.png'
import styles from './SearchBar.module.css'

const searchBar = (props) =>{
    return(
        <div className = {styles['search-bar']}>
        <input className = {styles['search-txt']} type = "text" name = "" placeholder = "Type a name"/>
        <a className = {styles['search-btn']}>
        <img className = {styles['search-icon']} src={searchIcon} alt="S"/>
        </a>
        </div>
    );
}

export default searchBar