import React from 'react'
import Review from './Review/Review'


const reviews = (props) => {
    return props.reviews.map((review, index) => {
        return <Review
            name={review.username}
            key={review.id}
        />
    }
    );
}

export default reviews;