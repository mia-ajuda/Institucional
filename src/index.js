import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import App from "./App";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
