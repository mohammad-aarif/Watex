import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 ">
                        <img className="logo" src="https://i.ibb.co/zVNFhds/watex-1.png" alt="" />
                        <h1 className="text-light"> Stay in Touch!</h1>
                        <p className="text-secondary">From new products to new ways to drink in the adventure, we’ll take you along for the ride with the latest on everything Watex.</p>
                    </div>
                    <div className="col-md-4">
                        <h4 className="text-light ms-2">SHOP</h4>
                        <Link to="" className="btn text-secondary">New Araivals</Link><br />
                        <Link to="" className="btn text-secondary">Gift Items</Link><br />
                        <Link to="" className="btn text-secondary">Customization</Link><br />
                        <Link to="" className="btn text-secondary">Bottles</Link><br />
                    </div>
                    <div className="col-md-4">
                    <h4 className="text-light ms-2">SUPPORT</h4>
                        <Link to="" className="btn text-secondary">FAQ</Link><br />
                        <Link to="" className="btn text-secondary">Contact</Link><br />
                        <Link to="" className="btn text-secondary">Warranty</Link><br />
                        <Link to="" className="btn text-secondary">Returns</Link><br />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;