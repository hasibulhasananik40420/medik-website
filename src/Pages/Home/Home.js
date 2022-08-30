import React from 'react';
import Products from '../Products/Products';
import ClientSay from './ClientSay';
import FooterTop from './FooterTop';
import Header from './Header';
import HomeAdd from './HomeAdd';
import LatestNews from './LatestNews';
import Newsletter from './Newsletter';
import Showpage from './Showpage';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HomeAdd></HomeAdd>
            <Products></Products>
            <ClientSay></ClientSay>
            <LatestNews></LatestNews>
            <Showpage></Showpage>
            <Newsletter></Newsletter>
            <FooterTop></FooterTop>

        </div>
    );
};

export default Home;