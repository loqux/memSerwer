import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { memsFetched, updateMem } from "../redux/actions/memActions";
import { bindActionCreators } from "redux";
import { useLocation } from "react-router-dom";
import MemsPage from "./MemsPage";

const MemsList = (props) => {
  const [isUpdated, setUpdated] = useState();

  useEffect(() => {
    props.memsFetched();
  }, [isUpdated]);

  const handleUpvoteMem = async (mem) => {
    let newMem = { ...mem };
    newMem.upvotes = newMem.upvotes + 1;
    setUpdated(newMem);
    await props.updateMem(newMem);
  };

  const handleDownvoteMem = async (mem) => {
    let newMem = { ...mem };
    newMem.downvotes = newMem.downvotes - 1;
    setUpdated(newMem);
    await props.updateMem(newMem);
  };

  if (useLocation().pathname === "/hot") {
    return (
      <MemsPage
        mems={props.mems.hots}
        handleUpvoteMem={handleUpvoteMem}
        handleDownvoteMem={handleDownvoteMem}
      />
    );
  }
  return (
    <MemsPage
      mems={props.mems.regulars}
      handleUpvoteMem={handleUpvoteMem}
      handleDownvoteMem={handleDownvoteMem}
    />
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
