import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import memStore from "./redux/store";

ReactDOM.render(
  <Provider store={memStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
