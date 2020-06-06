import React from "react";
import "./App.css";
import MemList from "./component/MemList";
import Header from "./component/Layouts/Header.js";
import NavBar from "./component/Layouts/NavBar.js";
import Leyout from "./component/Layouts/index";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { red } from "@material-ui/core/colors";

const styles = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10 },
};

function App() {
  // const classes = useStyles();

  return (
    <div className="App">
      <Router>
        <Leyout>
          <Switch>
            <Route exact path="/">
              <Redirect to="/regular" />
            </Route>
            <Route path="/regular">
              <MemList styles={styles} />
            </Route>
            <Route path="/hot">
              <MemList styles={styles} />
            </Route>
            <Route path="*">
              <MemList styles={styles} />
            </Route>
          </Switch>
        </Leyout>
      </Router>
    </div>
  );
}

export default App;
