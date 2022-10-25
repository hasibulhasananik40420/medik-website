import React from 'react';
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
            {/* <ClientSay></ClientSay> */}
            <LatestNews></LatestNews>
            {/* <Showpage></Showpage> */}
            <Newsletter></Newsletter>
            <FooterTop></FooterTop>

        </div>
    );
};

export default Home;