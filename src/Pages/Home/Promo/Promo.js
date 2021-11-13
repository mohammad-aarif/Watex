import React from 'react';
import { Link } from 'react-router-dom';
import './promo.css'
const Promo = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6 promo-banner py-3 text-light text-center">
                    <h5>NEW</h5>
                    <h1>Best Gift Set</h1>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-12 promo-details">
                            <h2 className="text-enter pt-5 text-light">Get 50% OFF On <br /> Your First Purchase</h2>
                            <Link to='/shop' className="btn btn-light px-5 mx-auto mb-5">Buy Now</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6  sub-promo">
                            <img src="https://i.ibb.co/4tpfwfX/Background-2x-Mobile-12.jpg" alt="" />
                        </div>
                        <div className="col-md-6  sub-promo">
                            <img src="https://i.ibb.co/s1bMqyf/20200918-hf-evergreen-04035-1800x1800-1.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promo;