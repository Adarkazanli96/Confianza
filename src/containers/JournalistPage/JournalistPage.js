import React, { Component } from 'react'
import Logo from '../../components/Logo/Logo'
import JournalistIcon from '../../components/JournalistIcon/JournalistIcon'
import Rating from '../../components/Rating/Rating'
import Reviews from '../../components/Reviews/Reviews'
import SearchBar from '../../components/SearchBar/SearchBar'
import Navbar from '../../components/Navbar/Navbar'
import styles from './JournalistPage.module.css'
import Modal from '../../components/Modal/Modal'
import NewReview from '../../components/NewReview/NewReview'
import axios from '../../axios-orders'

class JournalistPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews: [
                { id: "kjsf", headline: 'Lorem ipsum dolor sit amet' },
                { id: "klsd", headline: 'Lorem ipsum dolor sit amet' },
                { id: "ksjf", headline: 'Lorem ipsum dolor sit amet' }
            ],

            /*review: {*/
                comment: "comment",
                id: "lksj",
                headline: " ",
            /*},*/

            writingReview: false
        }
    }

    writeReviewHandler = () => {
        this.setState({ writingReview: true })
    }

    cancelReviewHandler = () => {
        this.setState({ writingReview: false })
    }

    setCommentHandler = (event) => {
        
    }

    setHeadlineHandler = (event) => {
        this.setState({headline: event.target.value})
    }

    submitReviewHandler = () =>{
        
        const review = {
             comment: this.state.comment,
             id: this.state.id,
             headline: this.state.headline
        }

        axios.post('reviews.json', review)
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }

    render() {

        return (
            <div>
                <Modal
                    show={this.state.writingReview}
                    modalClosed={this.cancelReviewHandler}>
                    <NewReview
                        reviewCancelled={this.cancelReviewHandler}
                        reviewSubmitted = {this.submitReviewHandler}
                        handleChange = {(event) => this.setHeadlineHandler(event)}
                        value = {this.state.headline} />
                </Modal>
                <Navbar/>
                <JournalistIcon />
                <Rating />
                <Reviews reviews={this.state.reviews} />

                <button
                    className={styles['write-new-review-button']}
                    onClick={this.writeReviewHandler}>
                    WRITE REVIEW
            </button>

            </div>
        );
    }
}

export default JournalistPage;