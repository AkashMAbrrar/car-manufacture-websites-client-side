import React from 'react';
import InfoDetails from './InfoDetails';
import Parts from './Parts';
import TopBanner from './TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Parts></Parts>
            <InfoDetails></InfoDetails>
        </div>
    );
};

export default Home;