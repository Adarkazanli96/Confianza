import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux'
import styles from './Login.module.css'

const login = (props) => {
    return (
        <Aux>

            <h3 className={styles['login-text']}>Login</h3>
            <div className={styles['username-text']}>Username</div>
            <input type="text" placeholder="Enter Username" className={styles['username-input']} />
            <div className={styles['password-text']}>Password</div>
            <input type="password" placeholder="Enter Password" className={styles['password-input']} />
            <button type="submit" className={styles['login-button']}>Login</button>
            <label>
                <input type="checkbox" checked="checked" name="remember" className={styles['checkbox']} /> Remember me
            </label>


            <div>
                <button type="button" className={styles["cancelbtn"]}>Cancel</button>
                <span className={styles['psw']}>Forgot&nbsp;
                    <a href="#">password?</a>
                </span>
            </div>

        </Aux>
    );
}

export default login;