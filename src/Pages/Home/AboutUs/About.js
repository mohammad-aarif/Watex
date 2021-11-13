import React from 'react';
import { Link } from 'react-router-dom';
import './about.css'
const About = () => {
    return (
        <div className="about-us py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h6 className="text-secondary">ABOUT US</h6>
                        <h1>SIMPLICITY COMES FIRST <br /> IN DESIGN. AND SECOND.</h1>
                        <p>Mother Nature is the best designer there is. There’s never anything extra —every choice is made for a reason. That's our inspiration behind every product we design. Keep it strikingly simple. From product innovation to color leadership - simplicity drives all.</p>
                        <Link to="/shop" className="px-5 btn general-btn">View Shop</Link>
                    </div>
                    <div className="col-md-6 about-img">
                        <img src="https://i.ibb.co/yg4NFns/Custom-Logo-Banner-1f54ce5a-4455-440e-b659-aaa4b10d9188-2048x.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;