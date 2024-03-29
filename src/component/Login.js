import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../App";
import { Helmet } from "react-helmet";
function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",

    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const Form = (
    <div className="login">
      <Helmet>
        <link rel="stylesheet" href="Login.css" />
      </Helmet>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>

        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .app {
           
    display: flex;
   `,
        }}
      />

      <div className="Login-form">
        <div className="title"></div>
        {isSubmitted ? (
          <Router>
            <App />
          </Router>
        ) : (
          Form
        )}
      </div>
    </div>
  );
}

export default Login;
