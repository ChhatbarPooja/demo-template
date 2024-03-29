import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import Login from "./component/Login";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div>
    <Login />
    {/* <Router>
      <App />
    </Router> */}
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
