import React from 'react';
import Software from '../Software/Software';
import Banner from '../Banner/Banner';
import Items from '../Item/Items/Items';
import Features from '../Features/Features';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Software></Software>
            <Features></Features>
        </div>
    );
};

export default Home;