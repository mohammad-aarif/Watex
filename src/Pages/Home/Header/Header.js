import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
const Header = () => {
    return (
        <div className="header">
            <h1>Yours. Mine <br />His. Hers. Theirs.</h1>
            <p>EVERYONE'S FABOURITE WATER FLASK</p>
            <Link to="/shop" className="btn btn-light px-5 ">Shop Now</Link>
        </div>
    );
};

export default Header;