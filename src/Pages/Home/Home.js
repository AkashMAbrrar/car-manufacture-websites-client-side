import React from 'react';
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
        </div>
    );
};

export default Home;