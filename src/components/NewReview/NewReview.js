import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux'
import zero from '../../assets/images/stars/0.png'
import styles from './NewReview.module.css'

const newReview = (props) => {
    return (
        <Aux>
            <button className={styles['close-window-button']} onClick={props.reviewCancelled}>X</button>
            <h3 className={styles['header']}>Create Review</h3>
            <p>Overall rating</p>
            <img src={zero} className={styles['stars']} />
            <p>Add a headline</p>
            <input className={styles['headline']} placeholder="What's most important to know?" />
            <p>Write your review</p>
            <textarea rows="10" cols="74" className={styles['text-box']} placeholder="What's on your mind?" />
            <button className={styles['submit-button']}>Submit</button>
        </Aux>
    );
}

export default newReview;