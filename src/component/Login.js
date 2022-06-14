import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { useState } from "react";


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

      {/* <form action="/action_page.php" onSubmit={submitForm}>
        <div className="imgcontainer"></div>

        <div className="container">
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="email"
            autoComplete="off"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="pass">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="pass"
            autoComplete="off"
            required
            value={pass}
            onChange={(e) => setpass(e.target.value)}
          />

          <button className="button1" type="submit">Login</button>
        </div>
 */}

      <section class="container-fluid">
        {/* <!-- row and justify-content-center class is used to place the form in center --> */}
        <section class="row justify-content-center">
          <section class="col-12 col-sm-6 col-md-4">
            <form class="form-container" onSubmit={submitForm}>
              <div class="form-group">
                <h4 class="text-center font-weight-bold"> Login </h4>
                <label for="InputEmail1">Email Address</label>
                <input type="text" class="form-control" aria-describeby="emailHelp" placeholder="Enter email" name="email"
                  autoComplete="off"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="InputPassword1">Password</label>
                <input type="password" class="form-control" name="pass"
                  autoComplete="off"
                  required
                  value={pass}
                  onChange={(e) => setpass(e.target.value)}
                />

              </div>
              <button type="submit" class="btn btn-primary btn-block">Submit</button>
              <div class="form-footer">
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
      <Footer />
    </>

  )
}

export default Login