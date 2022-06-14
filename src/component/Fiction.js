import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import fiction_1 from './assets/fiction_1.jpg';
import fiction_2 from './assets/fiction_2.jpg';
import fiction_3 from './assets/fiction_3.jpg';
import fiction_4 from './assets/fiction_4.jpg';
import fiction_5 from './assets/fiction_5.jpg';
import fiction_6 from './assets/fiction_6.jpg';
const Fiction = () => {
    return (
        <>
            <Navbar />
            <h1 className='text-center'>Fiction Books</h1>
            <header className='main-header'>
                <h1><span>Must Read</span> Interesting Books</h1>
                <p>The fiction section offers original stories.</p>
            </header>

            <main className=' container fiction-container'>
                <section className='card fiction-card'>
                    <img className="img-fluid" src={fiction_1} alt="" ></img>
                    <h3>Fiction books</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, perspiciatis? Iure tempora distinctio velit unde, ipsum nemo repudiandae minima error.
                    </p>
                    <a href="" className='btn btn-primary'>Buy Now</a>
                </section>

                <section className='card fiction-card'>
                    <img className="img-fluid" src={fiction_2} alt=""></img>
                    <h3>Fiction books</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, perspiciatis? Iure tempora distinctio velit unde, ipsum nemo repudiandae minima error.
                    </p>
                    <a href="" className='btn btn-primary'>Buy Now</a>
                </section>

                <section className='card fiction-card'>
                    <img className="img-fluid" src={fiction_3} alt=""></img>
                    <h3>Fiction books</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, perspiciatis? Iure tempora distinctio velit unde, ipsum nemo repudiandae minima error.
                    </p>
                    <a href="" className='btn btn-primary'>Buy Now</a>
                </section>

                <section className='card fiction-card'>
                    <img className="img-fluid" src={fiction_4}></img>
                    <h3>Fiction books</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, perspiciatis? Iure tempora distinctio velit unde, ipsum nemo repudiandae minima error.
                    </p>
                    <a href="" className='btn btn-primary'>Buy Now</a>
                </section>

                <section className='card fiction-card'>
                    <img className="img-fluid" src={fiction_5}></img>
                    <h3>Fiction books</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, perspiciatis? Iure tempora distinctio velit unde, ipsum nemo repudiandae minima error.
                    </p>
                    <a href="" className='btn btn-primary'>Buy Now</a>
                </section>

                <section className='card fiction-card'>
                    <img className="img-fluid" src={fiction_6}></img>
                    <h3>Fiction books</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, perspiciatis? Iure tempora distinctio velit unde, ipsum nemo repudiandae minima error.
                    </p>
                    <a href="" className='btn btn-primary'>Buy Now</a>
                </section>
            </main>
            <Footer />
        </>

    )
}

export default Fiction