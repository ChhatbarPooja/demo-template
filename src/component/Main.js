import React from 'react'
import main from './assets/pexels-photo-1904769.jpeg'
const Main = () => {
    return (

        <main>
            <section className="section-1 pt-4 m-0" data-aos="fade-up" data-aos-offset="200"
                data-aos-delay="50" data-aos-duration="2000">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="pray">
                                <img src={main} alt="Pray" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="panel text-left">
                                <h1>Mr. Devid Smith</h1>
                                <p className="pt-4">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere iure adipisci harum ducimus accusantium, repudiandae aperiam voluptatum, id ex ratione omnis reiciendis possimus officiis.
                                </p>
                                {/* <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi vitae, tenetur quidem eum aliquid vel labore sint placeat ad deserunt consectetur fugit ullam. Eius unde neque ducimus obcaecati ipsum quos vero totam recusandae hic expedita nemo sit, illum
                                    harum. Quisquam impedit ullam itaque facere et ad molestiae quod reprehenderit excepturi!
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </main>

    )
}

export default Main