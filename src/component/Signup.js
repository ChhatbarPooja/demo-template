import React, { useState } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import App from "../App";

function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "user1",
      email: "pooja@123",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    email: "enter email",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, email, pass } = document.forms[0];

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
    <div className="UserLogin">
      <form onSubmit={handleSubmit}>
        <div className="userinput-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="userinput-container">
          <label>Email </label>
          <input type="email" name="email" required />
          {renderErrorMessage("email")}
        </div>
        <div className="userinput-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="userbutton-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="UserLogin">
      <div className="UserLogin-form">
        <div className="usertitle"></div>
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
