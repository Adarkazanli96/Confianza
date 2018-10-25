import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux'
import styles from './NewReview.module.css'

const newReview = (props) => {
    return (
        <Aux>
            <div>*Insert Rating Stars Here*</div>
            <p>Write your review</p>
            <textarea rows = "10" cols = "74"  className = {styles['text-box']} placeholder="What's on your mind?"/>
            <p>
                <button>Submit</button>
                <button onClick = {props.reviewCancelled}>Cancel</button>
            </p>
        </Aux>
    );
}

export default newReview;