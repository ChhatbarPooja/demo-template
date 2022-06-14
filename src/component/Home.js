import React from 'react'
import Navbar from './Navbar';
import Slide from './Slide';
import Main from './Main';
import Features from './Features';
import Dw_platform from './Dw_platform';
import Readers_review from './Readers_review';
import Footer from './Footer';
// import './Component/CSS/Style.css';



const Home = () => {
    return (
        <>
            <Navbar />
            <Slide />
            <Main />
            <Features />
            <Dw_platform />
            <Readers_review />
            <Footer />
        </>
    )
}

export default Home