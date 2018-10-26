import React from 'react'
import thumbsDown from '../../../assets/images/thumbs-down.png'
import thumbsUp from '../../../assets/images/thumbs-up.png'
import Aux from '../../../hoc/Aux/Aux'
import four from '../../../assets/images/stars/4.png'
import styles from './Review.module.css'
import flag from '../../../assets/images/flag.png'

const review = (props) => {
    return (
        <div className={styles['review-card']}>
        <span className = {styles['background']}></span>
            <img src={four} className={styles['stars']} />
            <span className={styles['headline']}>{props.headline}</span>

            <p className={styles['comment']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
        </p>
            <span className={styles['comment-likes-number']}>530</span>
            <img className={styles['comment-likes-button']} src={thumbsUp} alt="like" />
            <span className={styles['comment-dislikes-number']}>23</span>
            <img className={styles['comment-dislikes-button']} src={thumbsDown} alt="dislike" />
            <img className = {styles['flag']} src = {flag} alt = "report" />
        </div>);
}

export default review;