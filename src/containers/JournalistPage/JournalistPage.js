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
                comment: "",
                id: 0,
                headline: "",
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
        this.setState({comment: event.target.value})
    }

    setHeadlineHandler = (event) => {
        this.setState({headline: event.target.value})
    }

    submitReviewHandler = () =>{
        
        const review = {
             id: this.state.id,
             headline: this.state.headline,
             comment: this.state.comment
        }

        //clear the headline and comment fields
        this.setState({comment: "", headline:''})

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
                        headlineChange = {(event) => this.setHeadlineHandler(event)}
                        headlineValue = {this.state.headline}
                        commentChange = {(event) => this.setCommentHandler(event)}
                        commentValue = {this.state.comment}/>
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