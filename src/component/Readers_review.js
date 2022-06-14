import React from 'react'
import face1 from './assets/UI-face-1.jpg';
import face2 from './assets/UI-face-2.jpg';
import face3 from './assets/UI-face-3.jpg';
import face4 from './assets/UI-face-4.jpg';
import face5 from './assets/UI-face-5.jpg';


const Readers_review = () => {
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

                            <img class="card-img-top" src={face1} alt="Card image cap" style={{ width: '100%' }} />

                            <div class="card-body">
                                <h3 class="card-title">Blalock Jolene</h3>
                                <p class="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                                    iure autem recusandae, veniam, illo dolor soluta assumenda
                                    minima quia velit officia sit exercitationem nam ipsa,
                                    repellendus aut facilis quasi voluptas!
                                </p>
                                <a href="#" class="text-secondary text-decoration-none">
                                    Go somewhere</a>

                                <p class="text-black-50">CEO at Google</p>
                            </div>

                        </div>
                        <div className="card">
                            <img class="card-img-top" src={face1} alt="Card image cap" style={{ width: '100%' }} />

                            <div class="card-body">
                                <h3 class="card-title">Blalock Jolene</h3>
                                <p class="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                                    iure autem recusandae, veniam, illo dolor soluta assumenda
                                    minima quia velit officia sit exercitationem nam ipsa,
                                    repellendus aut facilis quasi voluptas!
                                </p>
                                <a href="#" class="text-secondary text-decoration-none"
                                >Go somewhere</a>

                                <p class="text-black-50">CEO at Google</p>
                            </div>
                        </div>
                        <div className="card">
                            <img class="card-img-top" src={face1} alt="Card image cap" style={{ width: '100%' }} />

                            <div class="card-body">
                                <h3 class="card-title">Blalock Jolene</h3>
                                <p class="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                                    iure autem recusandae, veniam, illo dolor soluta assumenda
                                    minima quia velit officia sit exercitationem nam ipsa,
                                    repellendus aut facilis quasi voluptas!
                                </p>
                                <a href="#" class="text-secondary text-decoration-none"
                                >Go somewhere</a>
                                <p class="text-black-50">CEO at Google</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Readers_review
