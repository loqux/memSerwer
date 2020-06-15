import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Mem from "./Mem";
import { withRouter } from "react-router-dom";
import { memsFetched, updateMem } from "../redux/actions/memActions";
import Leyout from "./Layouts/index";
import Paper from "@material-ui/core/Paper";
import { bindActionCreators } from "redux";

const MemsList = (props) => {
  const [mems, setMems] = useState([]);

  useEffect(() => {
    const fetched = props.memsFetched();
    setMems(fetched);
  }, []);

  const handleUpvoteMem = async (mem) => {
    let newMem = { ...mem };
    newMem.upvotes = newMem.upvotes + 1;
    await props.updateMem(newMem);
  };

  const handleDownvoteMem = async (mem) => {
    let newMem = { ...mem };
    newMem.downvotes = newMem.downvotes - 1;
    await props.updateMem(newMem);
  };

  return (
    <Leyout>
      <Paper styles={{ padding: 20, marginTop: 10, marginBottom: 10 }}>
        {props.mems.map((thismem) => (
          <Mem
            key={thismem.id}
            mem={thismem}
            onUpvoteClick={handleUpvoteMem}
            onDownvoteClick={handleDownvoteMem}
          />
        ))}
      </Paper>
    </Leyout>
  );
};

const mapStateToProps = (state) => {
  return {
    mems: state.mems,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      memsFetched,
      updateMem,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MemsList));
