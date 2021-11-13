import { Rating } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const SingleItem = (props) => {
    const {name, price,rating ,img, _id} = props.item

    return (
        <div className="col-md-4 col-sm-12 bottles-item">
            <div className="shop-img">
                <img src={img} alt="" />
            </div>
            <h4>{name}</h4>
            <div className="item-info justify-content-evenly">
            <Rating name="half-rating-read" size="small" defaultValue={rating} precision={0.2} readOnly />
            <p>{price} USD</p>
            </div>
            <Link to={`/details/${_id}`} className="w-75 mx-auto btn secondary-btn">DETAILS</Link>
        </div>
    );
};

export default SingleItem;