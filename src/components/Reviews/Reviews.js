import React from 'react'
import Review from './Review/Review'


const reviews = (props) => {
    return props.reviews.map((review, index) => {
        return <Review
            headline ={review.headline}
            key={review.id}
        />
    }
    );
}

export default reviews;