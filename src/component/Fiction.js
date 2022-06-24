import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import FictionData from "./FictionData";

const Fiction = (props) => {
  return (
    <>
      <Navbar />
      <header className="main-header">
        <h1>
          <span>Fiction Books</span> Gallery
        </h1>
        <p>
        Fiction is any creative work, chiefly any narrative work, portraying individuals, events, or places in ways that are imaginary or inconsistent with history, ...
        </p>
      </header>
      <main className="container container-fiction">
        {FictionData.map((curEle) => {
          return (
            <>
              <section className="card card-fiction text-center">
                <img src={curEle.imgsrc} alt="" />
                <div>
                  <h3>{curEle.title}</h3>
                  <p>{curEle.description}</p>
                  <a href="#" className="btn btn-fiction fiction-a">
                    Read
                  </a>
                </div>
              </section>
            </>
          );
        })}

        {/* <section className="card card-fiction text-center" data-aos="fade-left">
          <img src={fiction_2} className="img-fiction" alt="" />
          <div>
            <h3>Fiction Book Two</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              error enim laudantium, animi veniam libero eveniet culpa unde
              perferendis illo fugit corporis, voluptatibus totam dolorum,
              maiores magnam officia. Ab, delectus.
            </p>
            <a href="#" className="btn btn-fiction fiction-a">
              Buy Now
            </a>
          </div>
        </section>

        <section
          className="card card-fiction text-center"
          data-aos="fade-right"
        >
          <img src={fiction_3} className="img-fiction" alt="" />
          <div>
            <h3>Fiction Book Three</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              error enim laudantium, animi veniam libero eveniet culpa unde
              perferendis illo fugit corporis, voluptatibus totam dolorum,
              maiores magnam officia. Ab, delectus.
            </p>
            <a href="#" className="btn btn-fiction fiction-a">
              Buy Now
            </a>
          </div>
        </section>

        <section className="card card-fiction text-center" data-aos="fade-left">
          <img src={fiction_4} className="img-fiction" alt="" />
          <div>
            <h3>Fiction Book Four</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              error enim laudantium, animi veniam libero eveniet culpa unde
              perferendis illo fugit corporis, voluptatibus totam dolorum,
              maiores magnam officia. Ab, delectus.
            </p>
            <a href="#" className="btn btn-fiction fiction-a">
              Buy Now
            </a>
          </div>
        </section>

        <section
          className="card card-fiction text-center"
          data-aos="fade-right"
        >
          <img src={fiction_5} className="img-fiction" alt="" />
          <div>
            <h3>Fiction Book Five</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              error enim laudantium, animi veniam libero eveniet culpa unde
              perferendis illo fugit corporis, voluptatibus totam dolorum,
              maiores magnam officia. Ab, delectus.
            </p>
            <a href="#" className="btn btn-fiction fiction-a">
              Buy Now
            </a>
          </div>
        </section> */}
      </main>{" "}
      <Footer />
    </>
  );
};

export default Fiction;
