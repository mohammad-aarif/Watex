import React from 'react';
import Rating from '@mui/material/Rating';

const SingleReviw = (props) => {
    const{name, text, img, rate} = props.review;
    return (
        <div className="carousel-item" data-bs-interval="4000">
            <div className="review-img text-center">
                <img src={img} alt="" />
            </div>
            <div className="review-text w-50 mx-auto py-3 text-center">
                <h4>{name}</h4>
                <p className="text-secondary">{text}</p>
                <Rating name="half-rating-read" size="small" defaultValue={rate} precision={0.2} readOnly />
            </div>
        </div>
    );
};

export default SingleReviw;