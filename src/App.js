
import React from 'react'
import './component/CSS/Style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ebook from './component/Ebook';
import Home from './component/Home';
import Fiction from './component/Fiction';
import Audiobook from './component/Audiobook';
import Login from './component/Login';
import Contact from './component/Contact';
import Cards from './component/Cards';

// import Ebook from './component/Ebook';
const App = () => {
    return (
        <>

            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/Ebook' element={<Ebook />} />
                <Route path='/Audiobook' element={<Audiobook />} />
                <Route path='/Fiction' element={<Fiction />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Contact' element={<Contact />} />



            </Routes>
            <Cards />

        </>
    )
}

export default App
