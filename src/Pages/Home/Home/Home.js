import React from 'react';
import About from '../AboutUs/About';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import Review from '../Review/Review';
import ShopHome from '../ShopHome/ShopHome';

const Home = () => {
    return (
        <div>
            <Header />
            <About />
            <ShopHome />
            <Promo />
            <Review />
        </div>
    );
};

export default Home;