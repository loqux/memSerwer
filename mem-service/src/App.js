import React, { useState } from "react";
import "./App.css";
import Mem from "./component/Mem";
import Leyout from "./component/Layouts/index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { memsFetched, updateMem, addMem } from "./redux/actions/actions";
import { connect } from "react-redux";
import MemForm from "./component/MemForm";

const styles = (theme) => ({
  Paper: { padding: 20, marginBottom: 10 },
});

class App extends React.Component {
  async componentDidMount() {
    const mems = this.props;
    this.props.memsFetched(mems);
  }

  handleUpvoteMem = async (mem) => {
    let newMem = { ...mem };
    newMem.upvotes = newMem.upvotes + 1;
    await this.props.updateMem(newMem);
  };

  handleDownvoteMem = async (mem) => {
    let newMem = { ...mem };
    newMem.downvotes = newMem.downvotes - 1;
    await this.props.updateMem(newMem);
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Leyout>
            <Switch>
              <Route exact path="/">
                <Redirect to="/regular" />
              </Route>
              <Route path="/regular">
                <Paper
                  styles={{ padding: 20, marginTop: 10, marginBottom: 10 }}
                >
                  {this.props.mems
                    .filter((mem) => mem.upvotes + mem.downvotes < 6)
                    .map((mem) => (
                      <Mem
                        key={mem.id}
                        mem={mem}
                        onUpvoteClick={this.handleUpvoteMem}
                        onDownvoteClick={this.handleDownvoteMem}
                      />
                    ))}
                </Paper>
              </Route>
              <Route path="/hot">
                <Paper styles={{ padding: 20, marginBottom: 10 }}>
                  {this.props.mems
                    .filter((mem) => mem.upvotes + mem.downvotes > 5)
                    .map((mem) => (
                      <Mem
                        key={mem.id}
                        mem={mem}
                        onUpvoteClick={this.handleUpvoteMem}
                        onDownvoteClick={this.handleDownvoteMem}
                      />
                    ))}
                </Paper>
              </Route>
              <Route path="*">
                <Paper>
                  {this.props.mems.map((mem) => (
                    <Mem key={mem.id} mem={mem} />
                  ))}
                </Paper>
              </Route>
            </Switch>
          </Leyout>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mems: state.mems,
  };
};
const mapDispatchToProps = { memsFetched, updateMem, addMem };

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
