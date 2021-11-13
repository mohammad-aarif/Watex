import React from 'react';
import Rating from '@mui/material/Rating';
import './review.css';
import useReviews from '../../../Hooks/useReviews';
import SingleReviw from './SingleReviw';
const Review = () => {
    const [ review ] = useReviews();
    return (
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="20">
                    <div className="review-img text-center">
                        <img src={review?.[0]?.img} alt="" />
                    </div>
                    <div className="review-text w-50 mx-auto py-3 text-center">
                        <h4>{review?.name}</h4>
                        <p className="text-secondary">{review?.[0]?.text}</p>
                        <Rating name="half-rating-read" size="small" defaultValue={5} precision={0.2} readOnly />
                    </div>
                </div>

                {
                    review.map(review => <SingleReviw key={review._id} review={review}></SingleReviw>)
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    );
};

export default Review;