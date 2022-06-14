import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { useState } from "react";


const Audiobook = () => {


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
      <form action="/action_page.php" onSubmit={submitForm}>
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
      </form>
      <Footer />
    </>


  )
}

export default Audiobook