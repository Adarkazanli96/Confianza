import React from 'react'
import thumbsDown from '../../../assets/images/thumbs-down.png'
import thumbsUp from '../../../assets/images/thumbs-up.png'
import Aux from '../../../hoc/Aux/Aux'
import styles from './Review.module.css'

const review = (props) => {
    return (<div className = {styles['review']}>
        <p className = {styles['username']}>{props.name}</p>
        {/* comment */}
        <p className = {styles['comment']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
        </p>
        <span className = {styles['comment-likes-number']}>530</span>
        <img className = {styles['comment-likes-button']} src={thumbsUp} alt="good" />
        <span className = {styles['comment-dislikes-number']}>23</span>
        <img className = {styles['comment-dislikes-button']} src={thumbsDown} alt="bad" />
    </div>);
}

export default review;