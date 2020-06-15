import React, { useState } from "react";
import "./App.css";
import Leyout from "./component/Layouts/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import AddMem from "./component/AddMem";
import Page404 from "./component/Layouts/Page404";
import MemsList from "./component/MemsList";

const styles = (theme) => ({
  Paper: { padding: 20, marginBottom: 10 },
});

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <MemsList />
            </Route>
            <Route path="/regular">
              <MemsList />
            </Route>
            <Route path="/hot">
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
