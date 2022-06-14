import React from 'react'
// import logo from './assets/logo1.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='container-fluid p-0 background'>
            <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand" to="#">
                    <i className="fas fa-book-reader fa-2x mx-3">
                        {/* <img src={logo} className="logo"></img> */}
                    </i>DoCBook
                </Link>
                <button className="navbar-toggler bg-dark" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="mr-auto"></div>
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Ebook">e-Books</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <div className="dropdown">
                                <Link to="/Fiction" className="nav-link">Fiction</Link>
                                {/* <div className="dropdown-content">
                                    <Link to="#">Generic</Link>
                                    <Link to="#">Element</Link>
                                </div> */}
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact" data-target="#mymodal" data-toggle="modal">Sign Up</Link>

                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar