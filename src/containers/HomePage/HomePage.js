import React, { Component } from 'react'
import styles from './HomePage.module.css'
import Logo from '../../components/Logo/Logo'
import searchIcon from '../../assets/images/search-icon.png'

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {

        return (

            <div>
                <span className={styles['login-and-signup']}>
                    <button className={styles['login']}>Log In</button>
                    <button className={styles['signup']}>Sign Up</button>
                </span>
                
                <Logo style='large' />
                
                <div className={styles['search-bar']}>
                    <input className={styles['search-txt']} type="text" name="" placeholder="Type a name" />
                    <a className={styles['search-btn']} onClick={this.props.clicked}>
                        <img className={styles['search-icon']} src={searchIcon} alt="S" />
                    </a>
                </div>
                
                <div className={styles['quote']}>"You can't handle the truth."</div>

            </div>
        );
    }
}

export default HomePage;