import React from 'react'
import face1 from './assets/UI-face-1.jpg';


const ReadersReview = () => {
    return (

        <section className="section-4" data-aos="fade-up" data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="2000" >
            <div className="container text-center " >

                <h1 className="text-dark">What our Reader's Say about us</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="purchase text-center">

                <div className="cards">
                    <div className="d-flex flex-row justify-content-center flex-wrap">
                        <div className="card">

                            <img className="card-img-top" src={face1} alt="Card image cap" style={{ width: '100%' }} />

                            <div className="card-body">
                                <h3 className="card-title">Blalock Jolene</h3>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                                    iure autem recusandae, veniam, illo dolor soluta assumenda
                                    minima quia velit officia sit exercitationem nam ipsa,
                                    repellendus aut facilis quasi voluptas!
                                </p>
                                <a href="/abc.com" className="text-secondary text-decoration-none">
                                    Go somewhere</a>

                                <p className="text-black-50">CEO at Google</p>
                            </div>

                        </div>
                        <div className="card">
                            <img className="card-img-top" src={face1} alt="Card image cap" style={{ width: '100%' }} />

                            <div className="card-body">
                                <h3 className="card-title">Blalock Jolene</h3>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                                    iure autem recusandae, veniam, illo dolor soluta assumenda
                                    minima quia velit officia sit exercitationem nam ipsa,
                                    repellendus aut facilis quasi voluptas!
                                </p>
                                <a href="/abc.com" className="text-secondary text-decoration-none"
                                >Go somewhere</a>

                                <p className="text-black-50">CEO at Google</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={face1} alt="Card image cap" style={{ width: '100%' }} />

                            <div className="card-body">
                                <h3 className="card-title">Blalock Jolene</h3>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                                    iure autem recusandae, veniam, illo dolor soluta assumenda
                                    minima quia velit officia sit exercitationem nam ipsa,
                                    repellendus aut facilis quasi voluptas!
                                </p>
                                <a href="/abc.com" className="text-secondary text-decoration-none"
                                >Go somewhere</a>
                                <p className="text-black-50">CEO at Google</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default ReadersReview
