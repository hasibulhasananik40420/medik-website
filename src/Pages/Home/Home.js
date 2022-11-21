import React from 'react';
import Teammeet from '../Teammeet/Teammeet';
import CareService from './CareService';
import FooterTop from './FooterTop';
import Header from './Header';
import HeaderCaed from './HeaderCaed';
import LatestNews from './LatestNews';
import Newsletter from './Newsletter';
import Testmonial from './Testmonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HeaderCaed></HeaderCaed>
            <CareService></CareService>
            <Testmonial></Testmonial>
            <Teammeet></Teammeet>
            <LatestNews></LatestNews>
            <Newsletter></Newsletter>
            <FooterTop></FooterTop>

        </div>
    );
};

export default Home;