import React, { useState } from "react";
import "./App.css";
import Mem from "./component/Mem";
import Leyout from "./component/Layouts/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { memsFetched, updateMem } from "./redux/actions/actions";
import { connect } from "react-redux";
import AddMem from "./component/AddMem";
import Page404 from "./component/Layouts/Page404";

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
          <Switch>
            <Route exact path="/">
              <Leyout>
                <Paper
                  styles={{ padding: 20, marginTop: 10, marginBottom: 10 }}
                >
                  {this.props.mems.map((mem) => (
                    <Mem
                      key={mem.id}
                      mem={mem}
                      onUpvoteClick={this.handleUpvoteMem}
                      onDownvoteClick={this.handleDownvoteMem}
                    />
                  ))}
                </Paper>
              </Leyout>
            </Route>
            <Route path="/regular">
              <Leyout>
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
              </Leyout>
            </Route>
            <Route path="/hot">
              <Leyout>
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
              </Leyout>
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

const mapStateToProps = (state) => {
  return {
    mems: state.mems,
  };
};
const mapDispatchToProps = { memsFetched, updateMem };

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
