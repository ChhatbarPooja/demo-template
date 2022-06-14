import React from 'react'

const Features = () => {
    return (
        <div>
            <section className="section-2 container-fluid p-0" style={{ overflow: 'hidden' }} data-aos="fade-up" data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="2000">
                <div className="cover">
                    <div className="overlay"></div>
                    <div className="content text-center" data-aos="fade-in" data-aos-offset="200"
                        data-aos-delay="50" data-aos-duration="2000">
                        <h1>Some Features That Made Us Unique</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, eum?
                        </p>
                    </div>
                </div>
                <div className="container-fluid text-center" data-aos="flip-left" data-aos-delay="200">
                    <div className="numbers d-flex flex-md-row flex-wrap justify-content-center">
                        <div className="rect" data-aos="flip-left" data-aos-delay="200">
                            <h1>2345</h1>
                            <p>Happy Client</p>
                        </div>
                        <div className="rect">
                            <h1>6784</h1>
                            <p>Cups Coffee</p>
                        </div>
                        <div className="rect">
                            <h1>1056</h1>
                            <p>Tickets Submitted</p>
                        </div>
                        <div className="rect">
                            <h1>9152</h1>
                            <p>Total Projects</p>
                        </div>
                    </div>
                </div>

                <div className="purchase text-center" data-aos="fade-up" data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="2000">
                    <h1>Purchase Whatever You Want</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="cards">
                        <div className="d-flex flex-row justify-content-center flex-wrap">
                            <div className="card">
                                <div className="card-body">
                                    <div className="title">
                                        <h5 className="card-title">PDF</h5>
                                    </div>
                                    <p className="card-text">
                                        With supporting text below as a natural lead-in.
                                    </p>
                                    <div className="pricing">
                                        <h1>$77.99</h1>
                                        <a href="#" className="btn btn-dark px-5 py-2 primary-btn mb-5">Purchase Now</a>

                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="title">
                                        <h5 className="card-title">E-book</h5>
                                    </div>
                                    <p className="card-text">
                                        With supporting text below as a natural lead-in.
                                    </p>
                                    <div className="pricing">
                                        <h1>$99.99</h1>
                                        <a href="#" className="btn btn-dark px-5 py-2 primary-btn mb-5">Purchase Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="title">
                                        <h5 className="card-title">Print Copy</h5>
                                    </div>
                                    <p className="card-text">
                                        With supporting text below as a natural lead-in.
                                    </p>
                                    <div className="pricing">
                                        <h1>$58.99</h1>
                                        <a href="#" className="btn btn-dark px-5 py-2 primary-btn mb-5">Purchase Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Features