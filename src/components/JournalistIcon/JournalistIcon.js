import React from 'react'
import profilePicture from '../../assets/images/profile-picture.png'
import styles from './JournalistIcon.module.css'

const journalistIcon = (props) => {
    const names = props.name.split(" ");
    
    let firstName = names[0];
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    
    let lastName = names[1];
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

    return (
        <div>
            <img className={styles['picture']} src={profilePicture} alt="picture" />
            <h3 className = {styles['name']}>{firstName} {lastName}</h3>
        </div>
    );
}

export default journalistIcon;