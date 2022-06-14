import React from 'react'
import Navbar from './Navbar';
import Slide from './Slide';
import Main from './Main';
import Features from './Features';
import Dw_Platform from './DWPlatform';
import Readers_Review from './ReadersReview';
import Footer from './Footer';
// import './Component/CSS/Style.css';



const Home = () => {
    return (
        <>
            <Navbar />
            <Slide />
            <Main />
            <Features />
            <Dw_Platform />
            <Readers_Review />
            <Footer />
        </>
    )
}

export default Home