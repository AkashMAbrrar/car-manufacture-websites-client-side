import React from 'react';
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
            <Info></Info>
        </div>
    );
};

export default Home;