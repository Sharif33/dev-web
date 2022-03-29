import React from 'react';
import Banner from '../Banner/Banner';
import BannerTop from '../Banner/BannerTop';
import Courses from '../Courses/Courses';

const Home = () => {
    return (
        <div style={{overflowX:"hidden"}}  >
            <Banner/>       
            <Courses/>
            <BannerTop/>
        </div>
    );
};

export default Home;