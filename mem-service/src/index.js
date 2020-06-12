import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { AppContainer } from "./App";
import { Provider } from "react-redux";
import { memStore } from "./redux/MemStore";

ReactDOM.render(
  <Provider store={memStore}>
    <React.StrictMode>
      <AppContainer />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
