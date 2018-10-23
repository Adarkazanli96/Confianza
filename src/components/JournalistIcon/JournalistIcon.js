import React from 'react'
import profilePicture from '../../assets/images/profile-picture.png'
import styles from './JournalistIcon.module.css'

const journalistIcon = (props) => {
    return (
        <div>
            <img className={styles['picture']} src={profilePicture} alt="picture" />
            <h3 className = {styles['name']}>FirstName LastName</h3>
        </div>
    );
}

export default journalistIcon;