import React from 'react'
import book1 from './assets/book1.jpg';
import book2 from './assets/book2.jpg';
import book3 from './assets/book3.jpg';
import book4 from './assets/book4.jpg';
import book5 from './assets/book5.jpg';
import book6 from './assets/book6.jpg';
import book7 from './assets/book7.jpg';
import book8 from './assets/book8.jpg';
import Navbar from './Navbar';
import Footer from './Footer';

// import Carddata from './Carddata';
// console.log(Carddata);

function Ebook() {
    return (
        <>
            <Navbar />
            <div class="row card-row">
                <a href="#" target="_blank"></a>
                <div class="column column-card">
                    <div class="card card-ebook">
                        <img src={book1} className="card-img" style={{ width: '100%', height: '400px' }} alt="" />
                        <h2>Half Girlfriend</h2>
                        <a href="https://www.pdfdrive.com/download.pdf?id=33405148&h=affc310fac39fb54766a61ccd0604169&u=cache&ext=pdf" className="btn btn-primary mb-3">Read</a>
                    </div>
                </div>

                <a href="#" target="_blank"></a>
                <div class="column column-card">
                    <div class="card card-ebook">
                        <img src={book2} style={{ width: '100%', height: '400px' }} alt="" />
                        <h2>3 Mistake of my Life</h2>
                        <a href="http://media0.evenweb.com/files/media0:53404a51523f4.pdf.upl/Chetan%20Bhagat%20-three%20mistakes%20of%20my%20life.pdf" className="btn btn-primary mb-3">Read</a>
                    </div>
                </div>
                <a href="#" target="_blank"></a>
                <div class="column column-card">
                    <div class="card card-ebook">
                        <img src={book3} style={{ width: '100%', height: '400px' }} alt="" />
                        <h2>One Indian Girl</h2>
                        <a href="https://redicals.com/wp-content/uploads/2016/09/One_Indian_Girl_-_Chetan_Bhagat-Redicals.pdf" className="btn btn-primary mb-3">Read</a>
                    </div>
                </div>
                <a href="#" target="_blank"></a>
                <div class="column column-card">
                    <div class="card card-ebook">
                        <img src={book4} style={{ width: '100%', height: '400px' }} alt="" />
                        <h2>Revolution 2020</h2>
                        <a href="https://www.pdfdrive.com/download.pdf?id=18723858&h=df62219a380048d64963634ad0303812&u=cache&ext=pdf" className="btn btn-primary mb-3">Read</a>
                    </div>
                </div>
                <a href="#" target="_blank"></a>
                <div class="column column-card">
                    <div class="card card-ebook">
                        <img src={book5} style={{ width: '100%', height: '400px' }} alt="" />
                        <h2>5 point someone</h2>
                        <a href="https://www.pdfdrive.com/download.pdf?id=158062892&h=3b9b69aa5a86e75d6c7f20cc29892ebc&u=cache&ext=pdf" className="btn btn-primary mb-3">Read</a>
                    </div>
                </div>
                <a href="#" target="_blank"></a>
                <div class="column column-card">
                    <div class="card card-ebook">
                        <img src={book6} style={{ width: '100%', height: '400px' }} alt="" />
                        <h2>1 Night at call center</h2>
                        <a href="https://www.pdfdrive.com/download.pdf?id=29680425&h=848394ee0e4c7334128f0da99a9db441&u=cache&ext=pdf" className="btn btn-primary mb-3">Read</a>
                    </div>
                </div>
                <a href="#" target="_blank"></a>
                <div class="column column-card">
                    <div class="card card-ebook">
                        <img src={book7} style={{ width: '100%', height: '400px' }} alt="" />
                        <h2>2 states</h2>
                        <a href="https://collectablebooks.files.wordpress.com/2016/10/2-states-the-story-of-my-marriage-by-chetan-bhagat-booksforbookies-blogspot-in.pdf" className="btn btn-primary mb-3">Read</a>
                    </div>
                </div>
                <a href="#" target="_blank"></a>
                <div class="column column-card">
                    <div class="card card-ebook">
                        <img src={book8} style={{ width: '100%', height: '360px' }} />
                        <h2>What young India wants</h2>
                        <a href="https://www.pdfdrive.com/download.pdf?id=196370595&h=229becfd588c4fc8cac70091ac6bd3d4&u=cache&ext=epub" className="btn btn-primary mb-3">Read</a>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default Ebook

