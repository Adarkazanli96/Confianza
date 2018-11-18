import React from 'react'
import Review from './Review/Review'


const reviews = (props) => {
    let reviews;

    if(props.reviews == null){
        //reviews = [{
          //  headline: "",
            //comment: "",
           // rating: 0
        //}]
        return null;
    }

    else{
        //reviews = props.reviews;
        return props.reviews.map((review, index) => {
            return <Review
                headline ={review.headline}
                comment = {review.comment}
                rating = {review.rating}
            />
        }
        );
    }
    
    
}

export default reviews;