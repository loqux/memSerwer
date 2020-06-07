import React from "react";
import Mem from "./Mem";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  Paper: { padding: 20, marginTop: 10, marginBottom: 10 },
});

class MemList extends React.Component {
  state = {
    mems: [],
  };

  async componentDidMount() {
    const mems = await (await fetch("http://localhost:3004/mems")).json();
    this.setState({ mems });
  }

  render() {
    return (
      <Paper>
        <h1>Wszystkieee memy ! Tutaj :D</h1>
        {this.state.mems.map((mem) => (
          <Mem key={mem.id} mem={mem} />
        ))}
      </Paper>
    );
  }
}
export default withStyles(styles)(MemList);
