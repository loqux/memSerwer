import React from "react";
import "./App.css";
import Leyout from "./component/Layouts/index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import AddMem from "./component/AddMem";
import Page404 from "./component/Layouts/Page404";
import MemsList from "./component/MemsList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/regular" />
            </Route>
            <Route exact path="/regular">
              <MemsList />
            </Route>
            <Route exact path="/hot">
              <MemsList />
            </Route>
            <Route exact path="/addMem">
              <Leyout>
                <Paper>
                  <AddMem />
                </Paper>
              </Leyout>
            </Route>
            <Route path="*">
              <Page404 />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
