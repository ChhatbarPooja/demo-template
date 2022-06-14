import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { useState } from "react";
import SearchBar from './SearchBar';
import BookData from './Data.json';


const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setpass] = useState("");
  const [data, setalldata] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();

    const newData = { email: email, pass: pass };

    setalldata([...data, newData]);
    console.log(data);

  };
  return (
    <>
      <Navbar />

      <section className="container-fluid">
        {/* <!-- row and justify-content-center className is used to place the form in center --> */}
        <section className="row justify-content-center">
          <section className="col-12 col-sm-6 col-md-4">
            <form className="form-container" onSubmit={submitForm}>
              <div className="form-group">
                <h4 className="text-center font-weight-bold"> Login </h4>
                <label htmlFor="InputEmail1">Email Address</label>
                <input type="text" className="form-control"  placeholder="Enter email" name="email"
                  autoComplete="off"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="InputPassword1">Password</label>
                <input type="password" className="form-control" name="pass"
                  autoComplete="off"
                  required
                  value={pass}
                  onChange={(e) => setpass(e.target.value)}
                />

              </div>
              <button type="submit" className="btn btn-primary btn-block">Submit</button>
              <div className="form-footer">
                <p> Don't have an account?
                  <a href="/Contact" className='p-3'>Sign up</a></p>

              </div>
            </form>
          </section>

          <div className="container" style={{ backgroundColor: "#f1f1f1" }}></div>
          <div>
            {data.map((curele) => {
              return (
                <div className="showData">
                  <span>
                    <b style={{ padding: '10px', color: 'yellow' }}> Email is</b> {curele.email}
                  </span>
                  <span style={{ padding: '20px' }}>
                    <b style={{ padding: '10px', color: 'yellow' }}> Password</b> {curele.pass}
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      </section>
      <SearchBar placeholder="search books here" data={BookData} />


      <Footer />
    </>

  )
}

export default Login