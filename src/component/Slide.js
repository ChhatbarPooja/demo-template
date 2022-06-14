import React from 'react'
import slide1 from './assets/slider1.jpg';
import slide2 from './assets/slider2.jpg';
import slide3 from './assets/slider3.jpg';


const Slide = () => {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-aos="fade-up" data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="2000">

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block  slide" src={slide1} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block  slide" src={slide2} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block slide" src={slide3} alt="Third slide" />

                    </div>

                </div>

            </div>
            <h1 class="text-center pt-4 pb-4 m-2 text" data-aos="fade-up" data-aos-offset="200"
                data-aos-delay="50" data-aos-duration="2000">Books are our best friend</h1>
        </>

    )
}

export default Slide