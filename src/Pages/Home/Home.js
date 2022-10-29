import React from 'react';
import CareService from './CareService';
import ClientSay from './ClientSay';
import FooterTop from './FooterTop';
import Header from './Header';
import HeaderCaed from './HeaderCaed';
import LatestNews from './LatestNews';
import Newsletter from './Newsletter';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HeaderCaed></HeaderCaed>
            <CareService></CareService>
            <LatestNews></LatestNews>
            <Newsletter></Newsletter>
            <FooterTop></FooterTop>

        </div>
    );
};

export default Home;