import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import BookData from "./Data.json";
import App from "../App";

const Navbar = () => {
  return (
    <div className="container-fluid p-0 background">
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="#">
          <i className="fas fa-book-reader fa-2x mx-3">
            {/* <img src={logo} className="logo"></img> */}
          </i>
          DoCBook
        </Link>
        <button
          className="navbar-toggler bg-dark"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="mr-auto"></div>
          <ul className="navbar-nav">
            <li className="nav-item active  ">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Ebook">
                e-Books
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Fiction">
                Fiction
              </Link>
            </li>

            
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/Contact"
                data-target="#mymodal"
                data-toggle="modal"
              >
                Sign Up
              </Link>
            </li>
            <SearchBar
              placeholder="Search books here..."
              data={BookData}
            ></SearchBar>

           
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
