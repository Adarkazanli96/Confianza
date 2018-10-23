import React from 'react'
import styles from './Rating.module.css'

const rating = (props) => {
    return (
        <h3 className = {styles['text']}>
            Rating (1-5)
        </h3>
    );
}

export default rating;