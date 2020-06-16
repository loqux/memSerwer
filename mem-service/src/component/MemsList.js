import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { memsFetched, updateMem } from "../redux/actions/memActions";
import { bindActionCreators } from "redux";
import { useLocation } from "react-router-dom";
import Mem from "./Mem";
import Leyout from "./Layouts/index";
import Paper from "@material-ui/core/Paper";

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

  const handleFavorite = async (mem) => {
    let newMem = { ...mem };
    newMem.star = mem.star ? false : true;
    setUpdated(newMem);
    await props.updateMem(newMem);
  };

  if (useLocation().pathname === "/hot") {
    return (
      <Leyout>
        <Paper styles={{ padding: 20, marginTop: 10, marginBottom: 10 }}>
          {props.mems.hots.map((mem) => (
            <Mem
              key={mem.id}
              mem={mem}
              onUpvoteClick={handleUpvoteMem}
              onDownvoteClick={handleDownvoteMem}
              onMarkStar={handleFavorite}
            />
          ))}
        </Paper>
      </Leyout>
    );
  }
  return (
    <Leyout>
      <Paper styles={{ padding: 20, marginTop: 10, marginBottom: 10 }}>
        {props.mems.regulars.map((mem) => (
          <Mem
            key={mem.id}
            mem={mem}
            onUpvoteClick={handleUpvoteMem}
            onDownvoteClick={handleDownvoteMem}
            onMarkStar={handleFavorite}
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
