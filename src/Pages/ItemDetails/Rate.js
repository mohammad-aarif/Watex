import { Rating } from '@mui/material';
import React from 'react';

const Rate = (props) => {
    const {rating, ratecount} = props.rating
    return (
    <>
        <Rating name="half-rating-read" size="small" defaultValue={rating} precision={0.2} readOnly />
        ({rating}) <br />
        <small>Total {ratecount} People Rate this product</small>
    </>
    );
};

export default Rate;