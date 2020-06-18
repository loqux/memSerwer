import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { memsFetched, updateMem } from "../redux/actions/memActions";
import { bindActionCreators } from "redux";
import { useLocation } from "react-router-dom";
import Mem from "./Mem";
import Leyout from "./Layouts/index";

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
        {props.mems.hots.map((mem) => (
          <Mem
            key={mem.id}
            mem={mem}
            onUpvoteClick={handleUpvoteMem}
            onDownvoteClick={handleDownvoteMem}
            onMarkStar={handleFavorite}
          />
        ))}
      </Leyout>
    );
  }
  return (
    <Leyout>
      {props.mems.regulars.map((mem) => (
        <Mem
          key={mem.id}
          mem={mem}
          onUpvoteClick={handleUpvoteMem}
          onDownvoteClick={handleDownvoteMem}
          onMarkStar={handleFavorite}
        />
      ))}
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
