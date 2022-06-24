import React from "react";
import "./component/CSS/Style.css";
import { Routes, Route } from "react-router-dom";
import Ebook from "./component/Ebook";
import Home from "./component/Home";
import Fiction from "./component/Fiction";
import Contact from "./component/Contact";

const App = () => {


  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Ebook" element={<Ebook />} />

        <Route path="/Fiction" element={<Fiction />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
