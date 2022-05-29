import React from 'react';
import Reviews from '../Blogs/Reviews';
import Info from './Info';
import InfoDetails from './InfoDetails';
import Manufacture from './Manufacture';
import Parts from './Parts';
import TopBanner from './TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Parts></Parts>
            <InfoDetails></InfoDetails>
            <Manufacture></Manufacture>
            <Reviews></Reviews>
            <Info></Info>
        </div>
    );
};

export default Home;