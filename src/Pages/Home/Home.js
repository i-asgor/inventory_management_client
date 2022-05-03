import React from 'react';
import Software from '../../Software/Software';
import Banner from '../Banner/Banner';
import Items from '../Item/Items/Items';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Software></Software>
        </div>
    );
};

export default Home;