import React from 'react'
import four from '../../assets/images/stars/4.png'
import styles from './Rating.module.css'

const rating = (props) => {
    return (
        <div>
            <img src = {four} className = {styles['stars']}/>
        </div>
    );
}

export default rating;