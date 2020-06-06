import React from "react";
import Mem from "./Mem";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

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
      <Paper style={this.props.styles.Paper}>
        {console.log(this.mems)}
        <h1>Wszystkieee memy ! Tutaj :D</h1>
        {this.state.mems.map((mem) => (
          <Mem key={mem.id} mem={mem} />
        ))}
      </Paper>
    );
  }
}
export default MemList;
