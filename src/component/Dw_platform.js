import React from 'react'

const Dw_platform = () => {
    return (
        <section className="section-3 container-fluid p-0 text-center" data-aos="fade-in" data-aos-offset="200"
            data-aos-delay="50" data-aos-duration="2000">
            <div className="row">
                <div className="col-md-12 col-sm-12">
                    <h1>Download Our App for all Platform</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                        exercitationem alias perspiciatis omnis quod possimus odit
                        voluptatum! Sunt ea quasi praesentium, tenetur doloribus animi
                        obcaecati, sint nemo quae laudantium iusto unde eaque nostrum
                        nobis voluptatum
                    </p>
                </div>
            </div>
            <div className="platform row">
                <div className="col-md-6 col-sm-12 text-right">
                    <div className="desktop shadow-lg">
                        <div className="d-flex flex-row justify-content-center">
                            <i className="fas fa-desktop fa-3x py-2 pr-3"></i>
                            <div className="text text-left">
                                <h3 className="pt-1 m-0">Desktop</h3>
                                <p className="p-0 m-0">On website</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 text-left">
                    <div className="desktop shadow-lg">
                        <div className="d-flex flex-row justify-content-center">
                            <i className="fas fa-mobile-alt fa-3x py-2 pr-3"></i>
                            <div className="text text-left">
                                <h3 className="pt-1 m-0">On Mobile</h3>
                                <p className="p-0 m-0">On Play Store</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dw_platform