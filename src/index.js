import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import FAQ from "./FAQ";
import About from "./About";
import Events from "./Events";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <div style={{ border: "none" }}>
      <Route path="/" exact component={App} />
      <Route path="/faq/" exact component={FAQ} />
      <Route path="/about/" component={About} />
      <Route path="/events/" exact component={Events} />
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
