import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import bookData from "./BookDetail";

function Ebook(props) {
  return (
    <>
      <Navbar />
      <div className="row card-row">
        {bookData.map((curEle) => {
          return (
            <>
              <a href="#" target="_blank"></a>
              <div className="column column-card">
                <div className="card card-ebook">
                  <img
                    src={curEle.imgsrc}
                    className="card-img"
                    style={{ width: "100%", height: "400px" }}
                    alt=""
                  />
                  <h2>{curEle.title}</h2>
                  <a href={curEle.link} className="btn btn-primary mb-3">
                    Read
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <Footer />
    </>
  );
}

export default Ebook;
