import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Rate from './Rate'
import './itemdetails.css'
import { useParams } from 'react-router';
const ItemDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const url = `http://localhost:3002/products/${id}`;
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [url])
    const{name, img, price, description, _id} = product;

    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img className='w-75' src={img} alt="" />
                </div>
                <div className="col-md-6">
                    <h5 className="text-secondary">ACCSESSORIES</h5>
                    <h1>{name}</h1>
                    <h4>${price}</h4>
                    <Rate rating={product}/>
                    <h6 className="text-success py-2">In-Stock -- Available Now</h6>

                    <Link to={`/booking/${_id}`} className='btn general-btn w-100 mt-5'>Buy Now</Link>
                </div>
            </div>
        </div>
        <div className="item-details my-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="text-secondary">{name}</h1>
                        <p className="w-75 text-light">
                            {description}
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img className='w-75' src="https://i.ibb.co/NSV0Q11/ewp2021-hydroflask-3936-1800x18000-3.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="container  my-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img className='w-75' src="https://i.ibb.co/6v8pc0D/pro-grade-stainless-steel-1800x1800.webp" alt="" />
                    </div>
                    <div className="col-md-6">
                        <h1 className="text-secondary">Features Of <br /> {name}</h1>
                        <ul>
                            <li>TempShield™ insulation eliminates condensation and keeps beverages cold up to 24 hours and hot up to 12 hours</li>
                            <li>Durable 18/8 Pro-Grade Stainless Steel construction</li>
                            <li>Our Wide Mouth refresh features a stainless-steel collar and curved radius at the bottom edge for an updated look</li>
                            <li>Ideal size for all-day hydration</li>
                            <li>Fits most backcountry hydration filters</li>
                            <li>BPA-Free and Phthalate-Free</li>
                            <li>Dishwasher safe</li>
                            <li>Registered trademark symbol has been removed from logo and wordmark</li>
                            <li>Lifetime Warranty</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemDetails;