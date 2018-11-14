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

            // arraylist of existing reviews
            reviews: [],

            // object for posting a new review
            newReview: {
                comment: "",
                headline: "",
            },

            //indicates whether a new review is in the process of being written
            writingReview: false,

            theResponse: ""
        }
    }

    // new review is being written
    writeReviewHandler = () => {
        this.setState({ writingReview: true })
    }

    // cancel the new review
    cancelReviewHandler = () => {
        this.setState({ writingReview: false })

        //clear the headline and comment fields for the new review
        let r = Object.assign({}, this.state.newReview);    //creating copy of object
        r.comment = "";
        r.headline = "";
        this.setState({ newReview: r })
    }

    // set the value of the new comment to comment input field
    setCommentHandler = (event) => {
        let r = Object.assign({}, this.state.newReview);    //creating copy of object
        r.comment = event.target.value;                        //updating value
        this.setState({ newReview: r });
    }

    // set the value of the new headline to headline input field
    setHeadlineHandler = (event) => {
        let r = Object.assign({}, this.state.newReview);    //creating copy of object
        r.headline = event.target.value;                        //updating value
        this.setState({ newReview: r });
    }

    // posts new review to database
    submitReviewHandler = async () => {

        const review = {
            headline: this.state.newReview.headline,
            comment: this.state.newReview.comment
        }

        await axios.post('reviews.json', review)
            .then(response => console.log(response))
            .catch(error => console.log(error));
        
        axios.get('https://confianza-f74d4.firebaseio.com/reviews.json')
            .then(response => {
                this.setState({ reviews: Object.values(response.data) });
            })
    }

    // retrieves arraylist of reviews from database
    componentDidMount() {
        axios.get('https://confianza-f74d4.firebaseio.com/reviews.json')
            .then(response => {
                this.setState({ reviews: Object.values(response.data) });
            })
    }


    render() {
        
        /*const { reviews } = this.state
    console.log(reviews)*/
        
        return (
            <div>
                <Modal
                    show={this.state.writingReview}
                    modalClosed={this.cancelReviewHandler}>
                    <NewReview
                        reviewCancelled={this.cancelReviewHandler}
                        reviewSubmitted={this.submitReviewHandler}
                        headlineChange={(event) => this.setHeadlineHandler(event)}
                        headlineValue={this.state.newReview.headline}
                        commentChange={(event) => this.setCommentHandler(event)}
                        commentValue={this.state.newReview.comment} />
                </Modal>
                <Navbar />
                <JournalistIcon />
                <Rating />
                <Reviews reviews={this.state.reviews} />

                <button
                    className={styles['write-new-review-button']}
                    onClick={this.writeReviewHandler}>
                    WRITE REVIEW
                </button>

                {/*
                    reviews.map(item => <div>{item.comment}</div>)
                }*/}

            </div>
        );
    }
}

export default JournalistPage;