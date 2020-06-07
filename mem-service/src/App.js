import React from "react";
import "./App.css";
import MemList from "./component/MemList";
import Leyout from "./component/Layouts/index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Leyout>
          <Switch>
            <Route exact path="/">
              <Redirect to="/regular" />
            </Route>
            <Route path="/regular">
              <MemList />
            </Route>
            <Route path="/hot">
              <MemList />
            </Route>
            <Route path="*">
              <MemList />
            </Route>
          </Switch>
        </Leyout>
      </Router>
    </div>
  );
}

export default App;
